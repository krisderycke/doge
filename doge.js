document.getElementById("doge").addEventListener("mouseover", woofwoof);
document.getElementById("doge").addEventListener("mouseout", woof);
document.getElementById("doge").addEventListener("click", picture);

function picture() {
  if (document.getElementById("pic").style.display === "block") {
    document.getElementById("pic").style.display = "none";
    console.log("lol");
  } else {
    document.getElementById("pic").style.display = "block";
    console.log("lol2");
  }
}

function woofwoof() {
  document.getElementById("doge").innerHTML = "woof woof!";
}

function woof() {
  document.getElementById("doge").innerHTML = "woof!";
}

function loadPage() {
  document.getElementById("doge").innerHTML = "woof";
}
