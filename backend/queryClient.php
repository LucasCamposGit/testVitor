<?php

require "./database.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === "GET") {

    $stmt = $pdo->prepare("SELECT * FROM questionamento");
    $stmt->execute();
    $data = $stmt->fetchAll();
    
    echo json_encode($data);
}
