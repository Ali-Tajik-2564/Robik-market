<?php

header("Content-Type:application/json");

if (isset($_GET)) {

    if (isset($_GET['id'])) {
        $cid = $_GET['id'];

        include('../dbconfig/database.php');

        $result = $con->prepare("SELECT * FROM `comment` WHERE id=$cid ");
        $result->execute();
        $datas = $result->fetchAll(PDO::FETCH_ASSOC);
    
    
        foreach ($datas as $data) {
            $id = $data['id'];
            $user = $data['user'];
            $content = $data['content'];
            $likes = $data['likes'];
            response($id, $user, $likes, $content);
        }
    }else {
        include('../dbconfig/database.php');

        $result = $con->prepare("SELECT * FROM `comment` ");
        $result->execute();
        $datas = $result->fetchAll(PDO::FETCH_ASSOC);
    
    
        foreach ($datas as $data) {
            $id = $data['id'];
            $user = $data['user'];
            $content = $data['content'];
            $likes = $data['likes'];
            response($id, $user, $likes, $content);
        }
    }



}else {
    response(NULL, NULL, NULL, NULL, NULL, NULL, NULL, 200, "No Record Found");
}
function response($id, $user, $likes, $content)
{
    $response['id'] = $id;
    $response['user'] = $user;
    $response['content'] = $content;
    $response['likes'] = $likes;
    $json_response = json_encode($response);
    echo $json_response;
}