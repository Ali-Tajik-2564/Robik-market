<?php

header("Content-Type:application/json");

if (isset($_GET)) {


    include('../dbconfig/database.php');

    $result = $con->prepare("SELECT * FROM `blog` ");
    $result->execute();
    $datas = $result->fetchAll(PDO::FETCH_ASSOC);


    foreach ($datas as $data) {
        $id = $data['id'];
        $title = $data['title'];
        $image = $data['image'];
        $content = $data['content'];
        $tags = $data['tags'];
        response($id, $title, $image, $content, $tags);
    }
}else {
    response(NULL, NULL, NULL, NULL, NULL, NULL, NULL, 200, "No Record Found");
}
function response($id, $title, $image, $content, $tags)
{
    $response['id'] = $id;
    $response['title'] = $title;
    $response['image'] = $image;
    $response['content'] = $content;
    $response['tags'] = $tags;
    $json_response = json_encode($response);
    echo $json_response;
}