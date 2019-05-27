document.getElementById("doge").addEventListener("mouseover", woof);
document.getElementById("doge").addEventListener("click", picture);

function woof() {
  document.getElementById("doge").innerHTML = "woof woof!";
}

function picture() {
  document.getElementById("pic").style.display = "block";
}

function loadPage() {
  document.getElementById("doge").innerHTML = "woof";
}
