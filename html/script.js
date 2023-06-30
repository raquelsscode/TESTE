const chk = document.getElementById('chk');
const element = document.getElementById("about");
const text = document.getElementById("subtitle");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const desc = document.getElementById("desc");
const li = document.querySelectorAll(".name");

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  element.classList.toggle("mystyle");
  text.classList.toggle("dark_sub");
  h1.forEach((item) => {item.classList.toggle("dark_title")});
  h2.forEach((item) => {item.classList.toggle("dark_title")});
  desc.classList.toggle("dark_title")
  li.forEach((item) => {item.classList.toggle("dark_title")});
})