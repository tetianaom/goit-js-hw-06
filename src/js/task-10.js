function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const quantity = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const div = document.querySelector(".boxes");
let step = 30;

const onClick = (evn) => {
  const targetDataset = evn.currentTarget.dataset;
  if (targetDataset.create === "") {
    createBoxes(quantity.value);
  } else if (targetDataset.destroy === "") {
    destroyBoxes();
  }
};

function createBoxes(amount) {
  let markup = "";

  for (let i = 1; i <= amount; i += 1) {
    let colorBox = getRandomHexColor();
    markup += `<div class="js-item" style="width:${step}px;height:${step}px;background-color:${colorBox}"></div>`;
    step += 10;
  }

  boxes.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", onClick);
destroyButton.addEventListener("click", onClick);
