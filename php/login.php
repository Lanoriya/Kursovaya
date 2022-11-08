<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Личный кабинет</title>
  <link rel="stylesheet" type="text/css" href="./css/registration.css">
</head>
<body>
  <div class="header">
  	<h2>Авторизация</h2>
  </div>
	 
  <form method="post" action="login.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  		<label>Имя пользователя</label>
  		<input type="text" name="username">
  	</div>
  	<div class="input-group">
  		<label>Пароль</label>
  		<input type="password" name="password">
  	</div>
  	<div class="input-group">
  		<button type="submit" class="btn" name="login_user">Войти</button>
  	</div>
  	<p>
  		Создать учётную запись <a href="register.php" class="link_enter">Регистрация</a>
  	</p>
  </form>
</body>
</html>