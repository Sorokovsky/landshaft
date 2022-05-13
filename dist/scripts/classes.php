<?php
session_start(); 
class Admin{
   public $username = 'Sorokovsky';
   public $password = 'sorokov20041784';
   public $is_logined = false;
   public function __construct(){
       $this->is_logined = isset($_SESSION['Admin']);
   }
   public function login($username, $password){
       if($username == $this->username AND $password == $this->password){
           $_SESSION["Admin"] = true;
       }else{
           unset($_SESSION["Admin"]);
       }
       $this->is_login = isset($_SESSION['Admin']);
       return $this->is_logined;
   }
   public function logout() {
       unset($_SESSION["Admin"]);
   }
}
$admin = new Admin();
?>