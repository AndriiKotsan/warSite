function valid (form) {
  var name = form.username.value;
var fail=false;
var password= form.password.value;
var fail1=false;
if(name == "" || name== " ")
fail="Введіть, будь ласка, ім'я користувача";
if(fail)
  alert(fail);
if(password.length<6)
  fail1="Ваш пароль закороткий";
if(fail1)
  alert(fail1);
}
