<?php
If ($_SERVER['PHP_SELF']=="ikar01.php"){header("Location: lol.php");}
if(isset($_POST)){
    $query = json_decode($_POST["data"]);
    $query->good = md5("HotPass");
    $query->success = false;
    if ($query->pwd == $query->good)
        $query->success = true;
        echo "Ok!";
}
?>