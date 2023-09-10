<?php 

if (isset($_GET)) { 
    $url = "https://rubikmarket.iran.liara.run/dbconfig/api.php";
    
    $client = curl_init($url); 
    curl_setopt($client,CURLOPT_RETURNTRANSFER,true); 
    $response = curl_exec($client);
    echo $response ;
}

?>
