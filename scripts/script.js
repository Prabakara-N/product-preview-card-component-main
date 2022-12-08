//elements
mainCardEl = document.getElementById("main-card");
hiddenCardEln = document.getElementById("hidden");
btnEl = document.getElementById("btn");

//add eventlistners
btnEl.addEventListener("click", function () {
  mainCardEl.style.display = "none";
  hiddenCardEln.style.display = "block";
});
