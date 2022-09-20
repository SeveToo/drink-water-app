const BigCup = document.querySelector(".BigCup");
const smallCup = document.querySelectorAll(".smallCup");
// document.querySelector(":root").style.setProperty("--main-color", "#4444FF");
let ml = 0;
let used = true;

function fillBigCup() {
  document.querySelector(":root").style.setProperty("--height", `${ml / 20}%`);
  BigCup.textContent = `${ml} / 2000 ml`;
}

smallCup.forEach((el) => {
  el.onclick = () => {
    if (el.classList[1]) ml = el.getAttribute("date-nr") * 250;
    else ml = (el.getAttribute("date-nr") - 1) * 250;
    fillSmallCups(el.getAttribute("date-nr"));
    fillBigCup();
  };
});

function fillSmallCups(x) {
  for (let i = x; i < smallCup.length; i++) {
    smallCup[i].classList.add("contain");
  }
  for (let i = 0; i < x - 1; i++) {
    smallCup[i].classList.remove("contain");
  }
  smallCup[x - 1].classList.toggle("contain");
}
