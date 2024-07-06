<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json");

include("../dbconfig/database.php");

if (isset($_POST)) {

  $name = $_GET['name'];
  $password = $_GET['password'];
  $email = $_GET['email'];
  $phone_number = $_GET['phone_number'];
  $role = $_GET['role'];

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