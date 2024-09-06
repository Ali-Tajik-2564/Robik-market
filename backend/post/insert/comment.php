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



  $user = $_GET['user'];
  $content = $_GET['content'];
  $email = $_GET['email'];
  $status = $_GET['status'];
  $pname = $_GET['pname'];
  $pid = $_GET['pid'];
  $date = $_GET['date'];

  echo $email;
  echo $name;

  try {
    $result = $con->prepare("INSERT INTO comment (`user`,`content`,`email`,`status`,`pname`,`pid`,`date`) VALUES (?,?,?,?,?,?,?)");
    $result->bindValue(1, $user);
    $result->bindValue(2, $content);
    $result->bindValue(3, $email);
    $result->bindValue(4, $status);
    $result->bindValue(5, $pname);
    $result->bindValue(6, $pid);
    $result->bindValue(7, $date);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
}
