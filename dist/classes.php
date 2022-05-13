<?php 
class Admin{
   public $username = 'Sorokovsky';
   public $password = 'sorokov20041784';
   public $is_logined = false;
   public function login($username, $password){
       if($username == $this->username AND $password == $this->password){
           $this->is_logined = true;
       }else{
           $this->is_logined = false;
       }
       echo $this->is_logined;
   }
}
$admin = new Admin();
?>