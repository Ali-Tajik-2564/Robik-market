<?php

header("Content-Type:application/json");

if (isset($_GET)) {


    include('../dbconfig/database.php');

    $result = $con->prepare("SELECT * FROM `factor` ");
    $result->execute();
    $datas = $result->fetchAll(PDO::FETCH_ASSOC);


    foreach ($datas as $data) {
        $id = $data['id'];
        $user = $data['user'];
        $factor_code = $data['factor code'];
        $postal_code = $data['postal code'];
        $address = $data['address'];
        response($id, $user, $factor_code, $postal_code, $address);
    }
}else {
    response(NULL, NULL, NULL, NULL, NULL, NULL, NULL, 200, "No Record Found");
}
function response($id, $user, $factor_code, $postal_code, $address)
{
    $response['id'] = $id;
    $response['user'] = $user;
    $response['factor_code'] = $factor_code;
    $response['postal_code'] = $postal_code;
    $response['address'] = $address;
    $json_response = json_encode($response);
    echo $json_response;
}