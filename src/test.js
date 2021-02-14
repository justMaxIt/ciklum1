let arr = [];
const form = document.querySelector(".form");
const input = document.querySelector("#input");
const selectors = document.querySelectorAll("#second-page select");

// arr.push(input.currentValue);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  arr.push(input.value);

  console.log(input.value, arr);
});

console.log(arr);
