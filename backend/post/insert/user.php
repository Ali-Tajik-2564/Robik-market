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

  $datas = json_decode(file_get_contents("https://rubikmarket.iran.liara.run/post/insert/user.php"));

  $name = $datas['name'];
  $password = $datas['password'];
  $email = $datas['email'];
  $phone_number = $datas['phone_number'];
  $role = $datas['role'];

  echo $email;
  echo $name;

  try {
    $result = $con->prepare("INSERT INTO user (`name`,`password`,`email`,`phone_number`,`role`) VALUES (?,?,?,?,?)");
    $result->bindValue(1, $name);
    $result->bindValue(2, $password);
    $result->bindValue(3, $email);
    $result->bindValue(4, $phone_number);
    $result->bindValue(5, $role);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
}
