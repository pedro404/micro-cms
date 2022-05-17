<?php

if (isset($_POST['y']) && isset($_POST['x'])) {
        // Security check
        $filename = test_input($_POST['y'] . "");

        //!--------------------

        $target_dir = "../res/archiv/";
        $file = $target_dir . $filename . ".json";

        // Security check
        $content = test_input($_POST['x'] . "");

        if (file_exists($file)) {
                unlink($file);
        }

        if (!file_exists($file)) {
                file_put_contents($file, $content);
                chmod($file, 0644);
        }

        if (file_exists($file)) {
                echo "File saved 👍";
        }
}

//!-------------------------------------------------: Image Upload

$extension  = pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION); // jpg
$basename   = $filename . "." . $extension; // 241.jpg

$target_file  = "../res/img/{$basename}";
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));



// Zkontrolujte, zda je soubor obrázku skutečný obrázek nebo falešný
if (isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if ($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
        } else {
                echo "File is not an image.";
                $uploadOk = 0;
        }
}

// Zkontrolujte, zda soubor již existuje
if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
}

// Zkontrolujte velikost souboru
if ($_FILES["fileToUpload"]["size"] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
}

// Povolit určité formáty souborů
if (
        $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif"
) {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
}

// zkontrolujte, zda je $uploadOk nastaveno na 0 chybou
if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
        // pokud je vše v pořádku, nahrát soubor
} else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                echo "The file " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"])) . " has been uploaded.";
        } else {
                echo "Sorry, there was an error uploading your file.";
        }
}

// Security check
function test_input($data)
{
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
}
