<?php 
require_once('./classes.php');
$data = $admin->logout();
echo json_encode($data);