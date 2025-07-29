<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

include 'koneksi.php';

// Jika POST: simpan data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $pesan = $_POST["pesan"];

    $sql = "INSERT INTO contact (nama, email, subject, pesan) VALUES ('$nama', '$email', '$subject', '$pesan')";
    if ($koneksi->query($sql) === TRUE) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "fail", "error" => $koneksi->error]);
    }
    exit;
}

// Jika GET: ambil data
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $result = $koneksi->query("SELECT * FROM contact ORDER BY id DESC");
    $rows = [];

    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    echo json_encode($rows);
    exit;
}

$koneksi->close();
