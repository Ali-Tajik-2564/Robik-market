<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json");
header("Authorization: Bearer a3Dqdx3TrQfAcxXfTyzlsr7ify5McY4mM0iZ3yXVWo7MZi5xydi96OQL7upGS10d");

if (isset($_GET)) {

    if (isset($_GET['id'])) {
        $bid=$_GET['id'];
        include("../dbconfig/database.php");

        $result = $con->prepare("SELECT * FROM `blog` WHERE id=$bid ");
        $result->execute();
        $datas = $result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($datas);
    
    
    }else {
        include("../dbconfig/database.php");

        $result = $con->prepare("SELECT * FROM `blog` ");
        $result->execute();
        $datas = $result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($datas);
        
    }




}else {
    echo "No Record Found";
}
