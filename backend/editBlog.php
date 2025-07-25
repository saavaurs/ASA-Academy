<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

include 'koneksi.php';

// proteksi sederhana
$secret = $_POST['secret'] ?? '';
if ($secret !== 'asa123') {
  echo json_encode(["status" => "unauthorized"]);
  exit;
}

$id = intval($_POST['id'] ?? 0);
$judul = mysqli_real_escape_string($koneksi, $_POST['judul'] ?? '');
$isi = mysqli_real_escape_string($koneksi, $_POST['isi'] ?? '');
$penulis = mysqli_real_escape_string($koneksi, $_POST['penulis'] ?? 'Admin');

if ($id <= 0 || empty($judul) || empty($isi)) {
  echo json_encode(["status" => "failed", "error" => "Data tidak valid"]);
  exit;
}

// Ambil gambar lama
$res = mysqli_query($koneksi, "SELECT gambar FROM blog WHERE id=$id");
$row = mysqli_fetch_assoc($res);
$relativePath = $row['gambar'] ?? null;

// Jika ada gambar baru
if (isset($_FILES['gambar']) && $_FILES['gambar']['error'] === UPLOAD_ERR_OK) {
  // hapus gambar lama
  if (!empty($relativePath) && file_exists(__DIR__ . '/../public/' . $relativePath)) {
    @unlink(__DIR__ . '/../public/' . $relativePath);
  }

  $tmpName  = $_FILES['gambar']['tmp_name'];
  $name     = basename($_FILES['gambar']['name']);
  $ext      = pathinfo($name, PATHINFO_EXTENSION);
  $newName  = time() . '_' . preg_replace('/[^a-zA-Z0-9_\-]/', '_', pathinfo($name, PATHINFO_FILENAME)) . '.' . $ext;

  $targetDir = realpath(__DIR__ . '/../public/images/blog');
  if (!$targetDir) {
    $targetDir = __DIR__ . '/../public/images/blog';
    if (!is_dir($targetDir)) mkdir($targetDir, 0777, true);
  }
  $targetFile = $targetDir . DIRECTORY_SEPARATOR . $newName;

  if (move_uploaded_file($tmpName, $targetFile)) {
    $relativePath = 'images/blog/' . $newName;
  } else {
    echo json_encode(["status" => "failed", "error" => "Gagal upload file"]);
    exit;
  }
}

$sql = "UPDATE blog 
        SET judul='$judul', isi='$isi', penulis='$penulis', gambar=" . ($relativePath ? "'$relativePath'" : "NULL") . "
        WHERE id=$id";

if (mysqli_query($koneksi, $sql)) {
  echo json_encode(["status" => "success", "gambar" => $relativePath]);
} else {
  echo json_encode(["status" => "failed", "error" => mysqli_error($koneksi)]);
}
