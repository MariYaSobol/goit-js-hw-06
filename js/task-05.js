// Напиши скрипт который, при наборе текста в
// инпуте input#name-input (событие input), подставляет его текущее
// значение в span#name-output. Если инпут пустой, в спане должна
// отображаться строка "Anonymous".

let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

// input.oninput = function () {
//   if (input.value === "") {
//     nameOutput.innerHTML = "Anonymous";
//   } else {
//     nameOutput.innerHTML = input.value;
//   }
// };
input.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value || "Anonymous";
});
