<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json");
header("Authorization: Bearer a3Dqdx3TrQfAcxXfTyzlsr7ify5McY4mM0iZ3yXVWo7MZi5xydi96OQL7upGS10d");

include("../dbconfig/database.php");

if (isset($_POST)) {

  $id = $_GET['id'];

  echo $id ;

  try {
    $result = $con->prepare("DELETE FROM product WHERE `product`.`id` = ?");
    $result->bindValue(1,$id);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

}