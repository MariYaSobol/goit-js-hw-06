const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputLength = input.value.length;
  const inputEl = input.getAttribute("data-length");
  const inputCheck =
    inputLength <= inputEl
      ? input.classList.add("invalid")
      : input.classList.replace("invalid", "valid");
});
