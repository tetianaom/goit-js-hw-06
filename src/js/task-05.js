const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInput = (event) => {
  const value = event.currentTarget.value;
  if (value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
};

textInput.addEventListener("input", onInput);
