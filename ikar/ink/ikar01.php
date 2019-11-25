<?php
if (stripos($_SERVER['PHP_SELF'], 'ink')){header("Location: ../index.html");}
if(isset($_POST) && isset($_POST['identifiant']) && isset($_POST['motdepasse'])){
    $query = json_decode($_POST["data"]);
    $query->good = md5("HotPass");
    $query->success = false;
    if ($query->pwd == $query->good)
        $query->success = true;
        echo "Ok!";
}
?>
