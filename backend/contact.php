<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$host = "localhost:3307";
$user = "root";
$pass = "";
$db = "contact_us";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Jika POST: simpan data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $pesan = $_POST["pesan"];

    $sql = "INSERT INTO contact (nama, email, subject, pesan) VALUES ('$nama', '$email', '$subject', '$pesan')";
    echo $conn->query($sql) === TRUE ? "success" : "fail";
}

// Jika GET: ambil data
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $result = $conn->query("SELECT * FROM contact ORDER BY id DESC");
    $rows = [];

    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    header("Content-Type: application/json");
    echo json_encode($rows);
}

$conn->close();
