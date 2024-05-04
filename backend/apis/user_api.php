<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json");

if (isset($_GET)) {

    if (isset($_GET['id'])) {

        $uid = $_GET['id'];

        include("../dbconfig/database.php");

        $result = $con->prepare("SELECT * FROM `user` WHERE id=$uid ");
        $result->execute();
        $datas = $result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($datas);
    } else {
        include("../dbconfig/database.php");


        $result = $con->prepare("SELECT * FROM `user` ");
        $result->execute();
        $datas = $result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($datas);
    }
} else {
    
    echo "No Record Found";
}
