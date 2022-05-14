<?php
    require_once('./classes.php');
    $name = $_GET['name'];
    $password = $_GET['password'];
    $data = $admin->login($name, $password);
    $data = json_encode($data);
    echo $data;