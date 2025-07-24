<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

include 'koneksi.php';

$input = json_decode(file_get_contents('php://input'), true);
$secret = $input['secret'] ?? '';
if ($secret !== 'asa123') {
  echo json_encode(["status" => "unauthorized"]);
  exit;
}

$id = intval($input['id'] ?? 0);
if ($id <= 0) {
  echo json_encode(["status" => "failed", "error" => "Invalid ID"]);
  exit;
}

// optional: hapus file gambarnya juga
$res = mysqli_query($koneksi, "SELECT gambar FROM blog WHERE id=$id");
if ($row = mysqli_fetch_assoc($res)) {
  if (!empty($row['gambar'])) {
    $file = __DIR__ . '/../public/' . $row['gambar'];
    if (file_exists($file)) @unlink($file);
  }
}

$del = mysqli_query($koneksi, "DELETE FROM blog WHERE id=$id");

if ($del) {
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "failed", "error" => mysqli_error($koneksi)]);
}
