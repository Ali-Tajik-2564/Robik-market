<?php

$dburl = parse_url(getenv('DATABASE_URL'));
$host = $dburl['host'];
$port = $dburl['port'];
$db =  ltrim($dburl['path'] , '/');
$dsn = "mysql:host=$host;port=$port;dbname=$db;CHARSET=UTF8";

try {
    $con = new PDO($dsn , $dburl['user'], $dburl['pass']);
    // set the PDO error mode to exception
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }


if (isset($_POST['sub'])) {
    $name = $_POST['name'];
    $fname = $_POST['fname'];
    $pid = $_POST['pid'];
    $number = $_POST['number'];

    $add = $conn->prepare("INSERT INTO `parvandeh`(`name`, `fname`, `pid`, `number`) VALUES ('$name','$fname','$pid','$number')");
    $add->execute();
}elseif (isset($_POST['back'])) {
    header("location:../project");
}






?>

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title> صفحه ثبت پرونده</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="../project/dist/css/adminlte.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="../project/plugins/iCheck/square/blue.css">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

    <!-- bootstrap rtl -->
    <link rel="stylesheet" href="../project/dist/css/bootstrap-rtl.min.css">
    <!-- template rtl version -->
    <link rel="stylesheet" href="../project/dist/css/custom-style.css">
</head>

<body class="hold-transition register-page">
    <div class="register-box">
        <div class="register-logo">
            <b>ثبت پرونده جدید </b>
        </div>

        <div class="card">
            <div class="card-body register-card-body">

                <form method="post">
                    <div class="input-group mb-3">
                        <input name="name" type="text" class="form-control" placeholder="نام و نام خانوادگی">
                    </div>
                    <div class="input-group mb-3">
                        <input name="fname" type="text" class="form-control" placeholder="نام پدر">
                    </div>
                    <div class="input-group mb-3">
                        <input name="pid" type="text" class="form-control" placeholder="شماره پرونده">
                    </div>
                    <div class="input-group mb-3">
                        <input name="number" type="text" class="form-control" placeholder="شماره تماس">
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <button name="sub" type="submit" class="btn btn-primary btn-block btn-flat">ثبت </button>
                            <button name="back" type="submit" class="btn btn-primary btn-block btn-flat">بازگشت </button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
            </div>
            <!-- /.form-box -->
        </div><!-- /.card -->
    </div>
    <!-- /.register-box -->

    <!-- jQuery -->
    <script src="../project/plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="../project/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- iCheck -->
    <script src="../project/plugins/iCheck/icheck.min.js"></script>
    <script>
        $(function() {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            })
        })
    </script>
</body>

</html>