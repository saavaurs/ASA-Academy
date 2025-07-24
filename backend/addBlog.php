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

// proteksi sederhana (opsional)
$secret = $_POST['secret'] ?? '';
if ($secret !== 'asa123') {
  echo json_encode(["status" => "unauthorized"]);
  exit;
}

$judul   = mysqli_real_escape_string($koneksi, $_POST['judul'] ?? '');
$isi     = mysqli_real_escape_string($koneksi, $_POST['isi'] ?? '');
$penulis = mysqli_real_escape_string($koneksi, $_POST['penulis'] ?? 'Admin');
$tanggal = date('Y-m-d');

$relativePath = null;

// handle upload file
if (isset($_FILES['gambar']) && $_FILES['gambar']['error'] === UPLOAD_ERR_OK) {
  $tmpName  = $_FILES['gambar']['tmp_name'];
  $name     = basename($_FILES['gambar']['name']);
  $ext      = pathinfo($name, PATHINFO_EXTENSION);
  $newName  = time() . '_' . preg_replace('/[^a-zA-Z0-9_\-]/', '_', pathinfo($name, PATHINFO_FILENAME)) . '.' . $ext;

  // path tujuan: ../public/images/blog
  $targetDir = realpath(__DIR__ . '/../public/images/blog');
  if (!$targetDir) {
    // jika belum ada, buat
    $targetDir = __DIR__ . '/../public/images/blog';
    if (!is_dir($targetDir)) {
      mkdir($targetDir, 0777, true);
    }
  }
  $targetFile = $targetDir . DIRECTORY_SEPARATOR . $newName;

  if (move_uploaded_file($tmpName, $targetFile)) {
    // simpan path relatif untuk dipakai di React
    $relativePath = 'images/blog/' . $newName;
  } else {
    echo json_encode(["status" => "failed", "error" => "Gagal upload file"]);
    exit;
  }
}

$sql = "INSERT INTO blog (penulis, tanggal, judul, isi, gambar)
        VALUES ('$penulis', '$tanggal', '$judul', '$isi', " . ($relativePath ? "'$relativePath'" : "NULL") . ")";

if (mysqli_query($koneksi, $sql)) {
  echo json_encode(["status" => "success", "id" => mysqli_insert_id($koneksi), "gambar" => $relativePath]);
} else {
  echo json_encode(["status" => "failed", "error" => mysqli_error($koneksi)]);
}
