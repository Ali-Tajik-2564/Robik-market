<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json");

include("../dbconfig/database.php");

if (isset($_POST)) {

  $id = $_GET['id'];

  echo $id ;

  try {
    $result = $con->prepare("DELETE FROM user WHERE `user`.`id` = ?");
    $result->bindValue(1,$id);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

}