<?php

$date = new DateTime("NOW");
$dateFormat = $date->format("mdYHisu");

$path = "../res/archiv/";
$file = $path . $dateFormat . ".json";
$tmpFile = $path . "data.tmp";



if (isset($_POST['x'])) {

        // Security check
        $content = test_input($_POST['x'] . "");

        saveFile($file, $content);
        saveFile($tmpFile, $dateFormat);
}

function saveFile($file, $content)
{
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

// Security check
function test_input($data)
{
        $data = trim($data);
        $data = stripslashes($data);
        return $data;
}

//!-------------------------------------------------: JSON Upload