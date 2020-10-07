function buttonclick() {
  alert("Ви покинете головну сторінку ");
}
function loadpage() {
  alert("Вітаємо вас, посмхніться ");
}
function havemouse() {
  alert("Вибачте, функція тимчасово недоступна ");
}
document.querySelector('#reklama').addEventListener('mouseup',  loadpage,false);
document.querySelector('#respass').addEventListener('mouseover',  havemouse,false);
document.querySelector('#sub').addEventListener('click',  buttonclick,false);

