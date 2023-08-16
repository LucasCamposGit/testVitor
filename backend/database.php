<?php

$host = 'localhost';
$db   = 'night';
$user = 'postgres';
$pass = 'lu25666293';

try {

    $dsn = "pgsql:host=$host;port=5432;dbname=$db;";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    $pdo = new PDO($dsn, $user, $pass, $options);
    
} catch(PDOException $e ) {
    $e->getMessage();
}
