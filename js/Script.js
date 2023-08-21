var stars = document.getElementById("stars");
var moon = document.getElementById("moon");
var mountain1 = document.getElementById("mountain1");
var mountain2 = document.getElementById("mountain2");
var river = document.getElementById("river");
var boat = document.getElementById("boat");
var nouvilText = document.getElementById("nouvilText");

function onPageScroll() {
  var scrY = scrollY;

  stars.style.left = scrY + "px";
  moon.style.top = scrY * 3 + "px";
  mountain1.style.top = scrY * 2 + "px";
  mountain2.style.top = scrY * 1.5 + "px";
  river.style.top = scrY + "px";
  boat.style.left = scrY * 3 + "px";
  boat.style.top = scrY + "px";
  nouvilText.style.fontSize = scrY + "px";
  //   nouvilText.style.bottom = scrY + "px";

  if (scrY >= 70) {
    nouvilText.style.fontSize = 80 + "px";
    nouvilText.style.position = "fixed";
    if (scrY >= 500) {
      nouvilText.style.display = "none";
    } else {
      nouvilText.style.display = "block";
    }
  }
}

// window.onscroll=function(){
//     var scrY = scrollY;

//     stars.style.left = scrY + "px";
//     moon.style.top = scrY * 3 + "px";
//     mountain1.style.top = scrY * 2 + "px";
//     mountain2.style.top = scrY * 1.5 + "px";
//     river.style.top = scrY + "px";
//     boat.style.left = scrY + "px";
//     boat.style.top = scrY * 3 + "px";
// }
