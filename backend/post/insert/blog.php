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
  $summary = $_GET['summary'];
  $content = $_GET['content'];
  $tags = $_GET['tags'];

  echo $title;
  echo $summary;

  try {
    $result = $con->prepare("INSERT INTO blog (`title`,`image`,`summary`,`content`,`tags`) VALUES (?,?,?,?,?)");
    $result->bindValue(1, $title);
    $result->bindValue(2, $image);
    $result->bindValue(3, $summary);
    $result->bindValue(4, $content);
    $result->bindValue(5, $tags);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
}
