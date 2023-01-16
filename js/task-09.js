function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChange = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");
const body = document.querySelector("body");

buttonChange.addEventListener("click", () => {
  let fillColor = getRandomHexColor();
  colorSpan.textContent = fillColor;
  body.style.backgroundColor = fillColor;
});
