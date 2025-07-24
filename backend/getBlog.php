<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'koneksi.php';

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    $sql = "SELECT * FROM blog WHERE id = $id";
    $result = mysqli_query($koneksi, $sql);

    if ($row = mysqli_fetch_assoc($result)) {
        echo json_encode($row);
    } else {
        echo json_encode(["message" => "Data tidak ditemukan"]);
    }
} else {
    $sql = "SELECT * FROM blog ORDER BY tanggal DESC";
    $result = mysqli_query($koneksi, $sql);

    $blogs = array();
    while($row = mysqli_fetch_assoc($result)) {
        $blogs[] = $row;
    }
    echo json_encode($blogs);
}
?>
