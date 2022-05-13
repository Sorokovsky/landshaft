<?php
include('./scripts/classes.php');
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
    <div id="admin">
    <?php
    if(!$admin->is_logined){?>
        <div class="admin__auth">
            <form action="admin.php" method="GET" class="admin__form">
                <input type="text" id="username" class="admin__input" placeholder="Ligin:" />
                <input type="text" id="password" class="admin__input" placeholder="Password: "/>
                <button type="submit" class="admin__btn">Login</button>
            </form>
        </div>
    <?php }else{ ?>
        <span>Logined</span>
        <button class="logout"></button>
    <?php }?>
    </div>
    <script src="./js/script.min.js?_v=20220513191143"></script>
</body>
</html>