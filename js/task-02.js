const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.getElementById("ingredients");
// const liElem = document.createElement("li");
for (const ingredient of ingredients) {
  // console.log(liElem);
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  // liElem.class = "item";
  liElem.classList.add("item");
  container.prepend(liElem);
}
