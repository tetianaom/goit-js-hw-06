const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeControl = (event) => {
  const point = event.currentTarget.value;
  console.log(point);
  text.style.fontSize = `${point}px`;
};

rangeInput.addEventListener("input", changeControl);
