<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "asaacademy";
$port = 3307;

$koneksi = mysqli_connect($host, $user, $pass, $db, $port);

// Cek koneksi
if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
