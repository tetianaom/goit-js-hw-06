const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
console.log(list);

const ingredientsList = ingredients.map((ingr) => {
  const item = document.createElement("li");
  item.textContent = ingr;
  item.classList.add("item");
  return item;
});

list.append(...ingredientsList);
