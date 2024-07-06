<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json");

include("../dbconfig/database.php");

if (isset($_POST)) {

  $title = $_GET['title'];
  $image = $_GET['image'];
  $content = $_GET['content'];
  $price = $_GET['price'];
  $warranty = $_GET['warranty'];
  $score = $_GET['score'];
  $tags = $_GET['tags'];
  $quanity = $_GET['quanity'];

  try {
    $result = $con->prepare("INSERT INTO product (`title`,`image`,`content`,`price`,`warranty`,`score`,`tags`,`quanity`) VALUES (?,?,?,?,?,?,?,?)");
    $result->bindValue(1,$title);
    $result->bindValue(2,$image);
    $result->bindValue(3,$content);
    $result->bindValue(4,$price);
    $result->bindValue(5,$warranty);
    $result->bindValue(6,$score);
    $result->bindValue(7,$tags);
    $result->bindValue(8,$quanity);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

}