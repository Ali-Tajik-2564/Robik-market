<?php

header("Content-Type:application/json");

if (isset($_GET) && $_GET['id'] == "user") {


    include('database.php');

    $result = $con->prepare("SELECT * FROM `user` ");
    $result->execute();
    $datas = $result->fetchAll(PDO::FETCH_ASSOC);


    foreach ($datas as $data) {
        $name = $data['name'];
        $password = $data['password'];
        $email = $data['email'];
        $phone_number = $data['phone number'];
        $home_number = $data['home number'];
        $national_code = $data['national code'];
        $card_number = $data['card number'];
        $birth_date = $data['birth date'];
        response($id, $name, $password, $email, $phone_number, $home_number, $national_code, $card_number, $birth_date);
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
} elseif (isset($_GET) && $_GET['id'] == "product") {

    include('database.php');

    $result = $con->prepare("SELECT * FROM `product` ");
    $result->execute();
    $datas = $result->fetchAll(PDO::FETCH_ASSOC);


    foreach ($datas as $data) {
        $title = $data['title'];
        $image = $data['image'];
        $content = $data['content'];
        $price = $data['price'];
        $warranty = $data['warranty'];
        $score = $data['score'];
        $tags = $data['tags'];
        $meta = $data['meta'];
        response($id, $title, $image, $content, $price, $warranty, $score, $tags, $meta);
    }

    function response($id, $title, $image, $content, $price, $warranty, $score, $tags, $meta)
    {
        $response['id'] = $id;
        $response['title'] = $title;
        $response['image'] = $image;
        $response['content'] = $content;
        $response['price'] = $price;
        $response['warranty'] = $warranty;
        $response['score'] = $score;
        $response['tags'] = $tags;
        $response['meta'] = $meta;
        $json_response = json_encode($response);
        echo $json_response;
    }
} else {
    response(NULL, NULL, NULL, NULL, NULL, NULL, NULL, 200, "No Record Found");
}
