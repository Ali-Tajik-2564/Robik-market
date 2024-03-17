<?php 
$dburl = parse_url(getenv('DATABASE_URL'));
$host = $dburl['host'];
$port = $dburl['port'];
$db =  ltrim($dburl['path'] , '/');
$dsn = "mysql:host=$host;port=$port;dbname=$db;CHARSET=UTF8";

try {
    $con = new PDO($dsn , $dburl['user'], $dburl['pass']);
    // set the PDO error mode to exception
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }


$id=$_GET['id'];
$result = $conn->prepare("DELETE FROM `parvandeh` WHERE id=?");
$result->bindValue(1,$id);
$result->execute();
header("location:../project");
?>