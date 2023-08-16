<?php

require "./database.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    
    $stmt = $pdo->prepare("SELECT * FROM financeiro");
    $stmt->execute();
    $data = $stmt->fetchAll();
    
    echo json_encode($data);
}

if ($_SERVER['REQUEST_METHOD'] === "POST") {


    if (isset($_POST['status'])) {
        $status = "true";
    } else {
        $status = "false";
    }

    $sql = "INSERT INTO questionamento
            (cliente, produto, receita, comentario, status, resposta)
            VALUES (:cliente, :produto, :receita, :comentario, :status, :resposta)";

    $stmt = $pdo->prepare($sql);
    
    $stmt->bindValue(":cliente", $_POST['cliente']);
    $stmt->bindValue(":produto", $_POST['produto']);
    $stmt->bindValue(":receita", $_POST['receita']);
    $stmt->bindValue(":comentario", $_POST['comentario']);
    $stmt->bindValue(":status", $status);
    $stmt->bindValue(":resposta", $_POST['resposta']);

    $stmt->execute();

}

