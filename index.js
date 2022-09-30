var changewidth = 100;
function iniciartamano() {
  var widthtimon = setInterval(timonwidth, 100);
}
function timonwidth() {
  var timonpirata = document.getElementById("timonpirata");

  timonpirata.style.width = changewidth + "px";
  changewidth += 1;
}