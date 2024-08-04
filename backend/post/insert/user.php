<?php

header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS');
header("Content-Type:application/json");

include("../dbconfig/database.php");

if (isset($_POST)) {

  $name = $_POST['name'];
  $password = $_POST['password'];
  $email = $_POST['email'];
  $phone_number = $_POST['phone_number'];
  $role = $_POST['role'];

  echo $email ;
  echo $name ;

  try {
    $result = $con->prepare("INSERT INTO user (`name`,`password`,`email`,`phone_number`,`role`) VALUES (?,?,?,?,?)");
    $result->bindValue(1,$name);
    $result->bindValue(2,$password);
    $result->bindValue(3,$email);
    $result->bindValue(4,$phone_number);
    $result->bindValue(5,$role);

    $result->execute();
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

}