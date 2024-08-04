<?php

header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS');
header("Content-Type:application/json");

include("../dbconfig/database.php");

if (isset($_POST)) {

  $off = $_GET['status'];

  try {
    $result = $con->prepare("UPDATE orders SET `status`=? ");
    $result->bindValue(1,$off);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

}