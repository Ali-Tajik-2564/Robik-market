<?php

header("Content-Type:application/json");

if (isset($_GET)) {


    include('../dbconfig/database.php');

    $result = $con->prepare("SELECT * FROM `product` ");
    $result->execute();
    $datas = $result->fetchAll(PDO::FETCH_ASSOC);


    foreach ($datas as $data) {
        $id = $data['id'];
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
}else {
    response(NULL, NULL, NULL, NULL, NULL, NULL, NULL, 200, "No Record Found");
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