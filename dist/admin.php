<?php
    class Admin{
        public $username = "Nelia";
        public $password = "Nelia5007001";
        public $is_logined;
        public function login($username, $password){
            if($username == $this->username AND $username == $this->username){
                $this->is_logined = true;
            }else{
                $this->is_logined = false;
            }
        }
        public function change_admin($username=$this->username, $password=$this->password){
            if($this->is_logined){
                $this->username = $username;
                $this->password = $password;
                return 'Admin was changed';
            }else{
                return "Admin was not changed";
            }
        }
    }
    $admin = new Admin();
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin panel</title>
</head>
<body>
    
</body>
</html>