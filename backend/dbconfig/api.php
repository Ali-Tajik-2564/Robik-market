<?php 

header("Content-Type:application/json"); 

if (isset($_GET['id']) && $_GET['id']!="") { 
include('database.php'); 
$id = $_GET['id']; 
$result = mysqli_query($conn ,"SELECT * FROM `user` WHERE id=$id"); 
if(mysqli_num_rows($result)>0){ 
$row = mysqli_fetch_array($result); 
$amount = $row['amount']; 
$response_code = $row['response_code']; 
$response_desc = $row['response_desc']; 
response($id, $amount, $response_code,$response_desc); 
mysqli_close($conn); 
}else{ 
response(NULL, NULL, 200,"No Record Found"); 
} 
}else{ 
response(NULL, NULL, 400,"Invalid Request"); 
} 

function response($id,$amount,$response_code,$response_desc){ 
$response['id'] = $id; 
$response['amount'] = $amount; 
$response['response_code'] = $response_code; 
$response['response_desc'] = $response_desc; 
$json_response = json_encode($response); 
echo $json_response; 
} 
?>