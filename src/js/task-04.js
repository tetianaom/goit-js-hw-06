const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;

const handleClick = (evn) => {
  const datasetAction = evn.currentTarget.dataset.action;
  if (datasetAction === "increment") {
    counterValue += 1;
  } else if (datasetAction === "decrement") {
    counterValue -= 1;
  }

  counter.textContent = counterValue;
};

buttonDecr.addEventListener("click", handleClick);
buttonIncr.addEventListener("click", handleClick);
