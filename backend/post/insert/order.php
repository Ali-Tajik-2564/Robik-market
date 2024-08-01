<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json");
header("Authorization: Bearer a3Dqdx3TrQfAcxXfTyzlsr7ify5McY4mM0iZ3yXVWo7MZi5xydi96OQL7upGS10d");

include("../dbconfig/database.php");

if (isset($_POST)) {

  $name = $_GET['name'];
  $adress = $_GET['adress'];
  $postal_code = $_GET['postal_code'];
  $orders = $_GET['orders'];
  $status = $_GET['status'];

  echo $name ;
  echo $adress ;

  try {
    $result = $con->prepare("INSERT INTO orders (`user`,`content`,`email`,`status`,`pname`) VALUES (?,?,?,?,?)");
    $result->bindValue(1,$user);
    $result->bindValue(2,$content);
    $result->bindValue(3,$email);
    $result->bindValue(4,$status);
    $result->bindValue(5,$pname);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

}