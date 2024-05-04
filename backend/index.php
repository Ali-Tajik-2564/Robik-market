<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RBR</title>
</head>
<style>
    * {
        box-sizing: border-box;
    }

    body {
        font-family: Arial;
        padding: 20px;
        background: #f1f1f1;
    }

    /* Header/Blog Title */
    .header {
        padding: 30px;
        font-size: 40px;
        text-align: center;
        background: white;
    }

    /* Create two unequal columns that floats next to each other */
    /* Left column */
    .leftcolumn {
        float: left;
        width: 75%;
    }

    /* Right column */
    .rightcolumn {
        float: left;
        width: 25%;
        padding-left: 20px;
    }

    /* Fake image */
    .fakeimg {
        background-color: #aaa;
        width: 100%;
        padding: 20px;
    }

    /* Add a card effect for articles */
    .card {
        background-color: white;
        padding: 20px;
        margin-top: 20px;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    /* Footer */
    .footer {
        padding: 20px;
        text-align: center;
        background: #ddd;
        margin-top: 20px;
    }

    /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 800px) {

        .leftcolumn,
        .rightcolumn {
            width: 100%;
            padding: 0;
        }
    }
</style>

<body>

    <div class="header">
        <h2>REZA JAN</h2>
    </div>

    <div class="row">
        <div class="leftcolumn">
            <div class="card">
                <h2>Reza playing football</h2>
                <h5>He is so sexy</h5>
                <div class="fakeimg" style="height:200px;"><img src="data:image/jpeg;base64,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" alt=""></div>
                <p>NFT Price : 1.5 million $</p>
            </div>
        </div>
        <div class="rightcolumn">
            <div class="card">
                <h2>About Reza</h2>
                <div class="fakeimg" style="height:100px;"><img src="data:image/jpeg;base64,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" alt=""></div>
                <p>The best Teacher Ever</p>
            </div>
            <div class="card">
                <h3>Popular Post</h3>
                <div class="fakeimg">Image</div><br>
                <div class="fakeimg">Image</div><br>
                <div class="fakeimg">Image</div>
            </div>
        </div>
    </div>

    <div class="footer">
        <h2>All rights reserved DAZZLE</h2>
    </div>

</body>

</html>