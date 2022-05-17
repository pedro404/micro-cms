<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="../../css/_index.css">
        <link rel="stylesheet" href="../../css/style.css">
        <link rel="stylesheet" href="./style.css">
        <title>Admin page</title>
</head>

<body>
        <div class="con-box">
                <form class="my-form">

                        <div class="w3-col l8 s12">
                                <div class="w3-card-4 w3-margin w3-white">
                                        <img class="img-pic" src="../../img/zero.jpg" alt="Zero image" style="width: 100%">
                                        <div class="w3-container">
                                                <h3>
                                                        <input type="text" class="title-heading in-elem" placeholder="TITLE HEADING">
                                                </h3>
                                                <h5><input type="text" class="title-description in-elem" placeholder="Title description">,
                                                        <span class="w3-opacity">
                                                                <input type="text" class="title-data in-elem" placeholder="April 7, 2014"></span>
                                                </h5>
                                        </div>
                                        <div class="w3-container">
                                                <p>
                                                        <textarea class="moka in-elem" placeholder="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl."></textarea>
                                                </p>
                                                <div class="w3-row">
                                                        <div class="w3-col m8 s12">
                                                                <p><input type="text" class="demo-url in-elem" placeholder="DEMO URL"> </p>
                                                        </div>
                                                        <div class="w3-col m4 w3-hide-small">
                                                                <p> <span class="w3-padding-large w3-right">

                                                                                <input type="text" class="hashtags in-elem" placeholder="HashTags">
                                                                                <input type="text" class="github-url in-elem" placeholder="GitHub URL">&nbsp;
                                                                                <a href="#" class="">GitHub</a> &nbsp;</b>
                                                                                <span class="git-ico">&nbsp;</span>
                                                                        </span>
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <!-- END BLOG ENTRIES -->
                        </div>
                        <div class="w3-col l8 s12">
                                <div class="w3-card-4 w3-margin w3-white">
                                        <div class="cont-center">
                                                <button class="write-new-post">SEND</button><button class="reset-post">RESET</button>
                                        </div>
                                </div>
                        </div>

                        <input class="in-img" type="file" oninput="document.querySelector('.img-pic').src=window.URL.createObjectURL(this.files[0])">

                </form>
        </div>




        <script src="./script.js"></script>
</body>

</html>