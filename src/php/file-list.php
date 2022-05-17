<?php

$files = glob("../htm/res/archiv/*.json");

foreach ($files as $file) {
        $arrFile .= $file . ",";
}

//!---: Заменить последний символ строки на пустое значение
echo substr_replace($arrFile, '', -1);
