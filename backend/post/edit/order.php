<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json");
header("Authorization: Bearer a3Dqdx3TrQfAcxXfTyzlsr7ify5McY4mM0iZ3yXVWo7MZi5xydi96OQL7upGS10d");

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