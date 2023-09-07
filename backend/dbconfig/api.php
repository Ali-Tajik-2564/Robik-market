<?php 

header("Content-Type:application/json"); 

if (isset($_GET['id']) && $_GET['id']!="") { 
include('database.php'); 
$id = $_GET['id']; 
$result = mysqli_query($conn ,"SELECT * FROM `user` WHERE id=$id"); 
if(mysqli_num_rows($result)>0){ 
$row = mysqli_fetch_array($result); 
$name = $row['name']; 
$password = $row['password']; 
$email = $row['email']; 
$phone_number = $row['phone number']; 
$home_number = $row['home number']; 
$national_code = $row['national code']; 
$card_number = $row['card number']; 
$birth_date = $row['birth date']; 
response($id, $name, $password,$email,$phone_number,$home_number,$national_code,$card_number,$birth_date); 
mysqli_close($conn); 
}else{ 
response(NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL, 200,"No Record Found"); 
} 
}else{ 
response(NULL, NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL, 200,"No Record Found"); 
} 

function response($id, $name, $password,$email,$phone_number,$home_number,$national_code,$card_number,$birth_date){ 
$response['id'] = $id; 
$response['name'] = $name; 
$response['password'] = $password; 
$response['email'] = $email; 
$response['phone_number'] = $phone_number; 
$response['home_number'] = $home_number; 
$response['national_code'] = $national_code; 
$response['card_number'] = $card_number; 
$response['birth_date'] = $birth_date; 
$json_response = json_encode($response); 
echo $json_response; 
} 
?>