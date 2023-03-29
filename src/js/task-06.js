const textInput = document.querySelector("#validation-input");

const onInput = (event) => {
  const target = event.currentTarget;

  if (target.value.length === Number(target.dataset.length)) {
    target.classList.remove("invalid");
    target.classList.add("valid");
  } else {
    target.classList.remove("valid");
    target.classList.add("invalid");
  }
};

textInput.addEventListener("blur", onInput);
