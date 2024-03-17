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


$datas = $conn->prepare("SELECT * FROM parvandeh");
$datas->execute();
$datas_display = $datas->fetchAll(PDO::FETCH_ASSOC);

$datacount = $conn->prepare("SELECT COUNT(id) FROM parvandeh");
$datacount->execute();
$datacount_res = $datacount->fetch(PDO::FETCH_ASSOC);
foreach ($datacount_res as $datacount_respone) {
}

if (isset($_POST['srch'])) {
  $target = $_POST['searchval'];

  $datas = $conn->prepare("SELECT * FROM parvandeh WHERE `pid` LIKE '%$target%' OR `name` LIKE '%$target%' OR `fname` LIKE '%$target%'");
  $datas->execute();
  $datas_display = $datas->fetchAll(PDO::FETCH_ASSOC);
}



?>
<html lang="en" dir="rtl">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title>پنل مدیریت</title>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="plugins/font-awesome/css/font-awesome.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

  <!-- bootstrap rtl -->
  <link rel="stylesheet" href="dist/css/bootstrap-rtl.min.css">
  <!-- template rtl version -->
  <link rel="stylesheet" href="dist/css/custom-style.css">

</head>

<body class="hold-transition sidebar-mini">
  <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
      <!-- SEARCH FORM -->
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a class="brand-link">
        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">پنل مدیریت</span>
      </a>
      <div class="sidebar">
        <div>
          <!-- Sidebar user panel (optional) -->
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="info">
              <a href="https://zil.ink/amirthesamurai" class="d-block">طراح : امیر محمد عبداله پور</a>
            </div>
          </div>
        </div>

    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-dark">پنل مدیریت پرونده ها</h1>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <!-- Info boxes -->
          <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
              <div class="info-box mb-3">
                <span class="info-box-icon bg-warning elevation-1"><i class="fa fa-users"></i></span>

                <div class="info-box-content">
                  <span class="info-box-text">تعداد پرونده ها</span>
                  <span class="info-box-number"><?php echo $datacount_respone ?></span>
                </div>
                <!-- /.info-box-content -->
              </div>
              <!-- /.info-box -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
          <!-- TABLE: LATEST ORDERS -->
          <div class="card">
            <div class="card-header border-transparent">
              <h3 class="card-title">پرونده ها</h3>
              <form class="form-inline ml-3" method="POST">
                <div class="input-group input-group-sm">
                  <input class="form-control form-control-navbar" name="searchval" type="search" placeholder="جستجو" aria-label="Search">
                  <div class="input-group-append">
                    <button class="btn btn-navbar" type="submit" name="srch">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form method="post">
              <div>
                <a href="../project/add.php" name="add" type="button" class="btn btn-block btn-success" style="max-width: 200px;">افزودن پرونده جدید</a>
              </div>
              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-widget="collapse">
                  <i class="fa fa-minus"></i>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-hover table-bordered">
                  <thead class="thead-dark">
                    <tr>
                      <th>نام و نام خانوادگی</th>
                      <th>نام پدر</th>
                      <th>شماره پرونده</th>
                      <th>شماره تماس</th>
                      <th>تغییرات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php foreach ($datas_display as $data) { ?>
                      <tr>
                        <td><?php echo $data['name']; ?></td>
                        <td><?php echo $data['fname']; ?></td>
                        <td><?php echo $data['pid']; ?></td>
                        <td><?php echo $data['number']; ?></td>
                        <td>
                          <span><a class="btn btn-block btn-warning" style="max-width: 70px;" href="../project/edit.php?id=<?php echo $data['id'] ?>">ویرایش</a>
                            <a class="btn btn-block btn-danger" style="max-width: 70px;" href="../project/remove.php?id=<?php echo $data['id'] ?>">حذف</a></span>
                        </td>
                      </tr>
                    <?php } ?>
                  </tbody>
                </table>
              </div>
              <!-- /.table-responsive -->
            </div>
          </div>
        </div>
        <!-- /.col -->

        <!-- REQUIRED SCRIPTS -->
        <!-- jQuery -->
        <script src="plugins/jquery/jquery.min.js"></script>
        <!-- Bootstrap -->
        <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- AdminLTE App -->
        <script src="dist/js/adminlte.js"></script>

        <!-- OPTIONAL SCRIPTS -->
        <script src="dist/js/demo.js"></script>

        <!-- PAGE PLUGINS -->
        <!-- SparkLine -->
        <script src="plugins/sparkline/jquery.sparkline.min.js"></script>
        <!-- jVectorMap -->
        <script src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
        <script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
        <!-- SlimScroll 1.3.0 -->
        <script src="plugins/slimScroll/jquery.slimscroll.min.js"></script>
        <!-- ChartJS 1.0.2 -->
        <script src="plugins/chartjs-old/Chart.min.js"></script>

        <!-- PAGE SCRIPTS -->
        <script src="dist/js/pages/dashboard2.js"></script>
</body>

</html>