<?php 

if (isset($_POST['sub'])) { 
    $id = $_POST['id']; 
    $url = "https://rubikmarket.iran.liara.run/dbconfig/api.php/".$id;
    
    $client = curl_init($url); 
    curl_setopt($client,CURLOPT_RETURNTRANSFER,true); 
    $response = curl_exec($client);
    echo $response ;
}

?>
