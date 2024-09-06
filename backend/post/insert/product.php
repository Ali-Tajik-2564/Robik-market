<?php

header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS');
header("Content-Type:application/json");



if (isset($_POST)) {
  $dburl = parse_url(getenv('DATABASE_URL'));
  $host = $dburl['host'];
  $port = $dburl['port'];
  $db =  ltrim($dburl['path'], '/');
  $dsn = "mysql:host=$host;port=$port;dbname=$db;CHARSET=UTF8";

  try {
    $con = new PDO($dsn, $dburl['user'], $dburl['pass']);
    // set the PDO error mode to exception
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }



  $title = $_GET['title'];
  $image = $_GET['image'];
  $content = $_GET['content'];
  $price = $_GET['price'];
  $warranty = $_GET['warranty'];
  $category = $_GET['category'];
  $infos = $_GET['infos'];
  $quanity = $_GET['quanity'];
  $off = $_GET['off'];

  try {
    $result = $con->prepare("INSERT INTO product (`title`,`image`,`content`,`price`,`warranty`,`infos`,`category`,`quanity`,`off`) VALUES (?,?,?,?,?,?,?,?,?)");
    $result->bindValue(1, $title);
    $result->bindValue(2, $image);
    $result->bindValue(3, $content);
    $result->bindValue(4, $price);
    $result->bindValue(5, $warranty);
    $result->bindValue(6, $infos);
    $result->bindValue(7, $category);
    $result->bindValue(8, $quanity);
    $result->bindValue(9, $off);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
}
