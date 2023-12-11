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



if (isset($_POST)) {

    echo "hi";

    $name = $_POST['name'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $home_number = $_POST['home_number'];
    $national_Code = $_POST['national_Code'];
    $card_number = $_POST['card_number'];
    $birth_date = $_POST['birth_date'];

    $result = $con->prepare("INSERT INTO user SET `name`=$name , `password`=$password , `email`=$email , `phone number`=$phone_number , `home number`=$home_number , `national Code` =$national_Code , `card number`=$card_number , `birth date`=$birth_date");
    $result->execute();
    $datas = $result->fetchAll(PDO::FETCH_ASSOC);

    


}
