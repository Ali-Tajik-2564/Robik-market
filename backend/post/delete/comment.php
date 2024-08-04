<?php

header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS');
header("Content-Type:application/json");

include("../dbconfig/database.php");

if (isset($_POST)) {

  $id = $_GET['id'];

  echo $id ;

  try {
    $result = $con->prepare("DELETE FROM comment WHERE `product`.`id` = ?");
    $result->bindValue(1,$id);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

}