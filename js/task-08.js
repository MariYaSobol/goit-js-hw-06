const logForm = document.querySelector(".login-form");
logForm.addEventListener("submit", onLogSubmit);

function onLogSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Поле не может оставаться пустым");
  }
  console.log(`Email:  ${email.value}`);
  console.log(`Password: ${password.value}`);
  event.currentTarget.reset();
}
