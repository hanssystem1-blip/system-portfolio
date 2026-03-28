<?php
$connexion= mysqli_connect("localhost","" ,"root" ,"system");
if (isset($_POST["username"])&&isset($_POST["email"])&&isset($_POST["messsage"])) {
    $username=$_POST["username"];
    $email=$_POST["email"];
    $message=$_POST["message"];
    if(!(empty($email)&&empty($username)&&empty($message))){
        $req="insert into recommandation(username,email,message)values('$usename','$email','$message') ";
        $sql=mysqli_query($connexion,$req);
    }
}
header("location:index.html");


?>