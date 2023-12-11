<?php

header("Content-Type:application/json");

if (isset($_GET)) {

    if (isset($_GET['id'])) {

        $uid = $_GET['id'];

        include('../dbconfig/database.php');

        $result = $con->prepare("SELECT * FROM `user` WHERE id=$uid ");
        $result->execute();
        $datas = $result->fetchAll(PDO::FETCH_ASSOC);


        foreach ($datas as $data) {
            $id = $data['id'];
            $name = $data['name'];
            $password = $data['password'];
            $email = $data['email'];
            $phone_number = $data['phone number'];
            $home_number = $data['home number'];
            $national_code = $data['national Code'];
            $card_number = $data['card number'];
            $birth_date = $data['birth date'];
            response($id, $name, $password, $email, $phone_number, $home_number, $national_code, $card_number, $birth_date);
        }
    }else{
        include('../dbconfig/database.php');

        $result = $con->prepare("SELECT * FROM `user` ");
        $result->execute();
        $datas = $result->fetchAll(PDO::FETCH_ASSOC);
    
    
        foreach ($datas as $data) {
            $id = $data['id'];
            $name = $data['name'];
            $password = $data['password'];
            $email = $data['email'];
            $phone_number = $data['phone number'];
            $home_number = $data['home number'];
            $national_code = $data['national Code'];
            $card_number = $data['card number'];
            $birth_date = $data['birth date'];
            response($id, $name, $password, $email, $phone_number, $home_number, $national_code, $card_number, $birth_date);
        }
    }

} else {
    response(NULL, NULL, NULL, NULL, NULL, NULL, NULL, 200, "No Record Found");
}
function response($id, $name, $password, $email, $phone_number, $home_number, $national_code, $card_number, $birth_date)
{
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
