const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  }
  console.log({
    email: email.value,
    password: password.value.trim(),
  });
  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
