const data = [
  { team: "Maria, Bob, Alex", day: "Mon", time: "10:00", text: "Meeting" },
];

// toggle for pages

const calendarPage = document.querySelector("#first-page");
const addEventPage = document.querySelector("#second-page");
const calendarButton = document.querySelector("#new-event");

calendarButton.addEventListener("click", toggle);
function toggle() {
  (calendarPage.style = "display: none"),
    (addEventPage.style = "display: block");
}

//table selector
const calendarRow = document.getElementsByTagName("tr");
for (i = 1; i < calendarRow.length; i++) {}

const list = [];
const users = ["Maria", "Bob", "Alex"];

let input = document.querySelector("#event-name");
const btnCreate = document.querySelector("#btn-create");
const div = document.querySelector(".ex");
const form = document.querySelector("#create-event");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let a = e.target.value;
  data.text = a;
  //   calendarRow[3].insertAdjacentHTML("afterbegin", a);
});

data.forEach((block) => {
  let cells = calendarRow[1].querySelectorAll("td");
  cells[2].insertAdjacentHTML("afterbegin", block.text);
  console.log(block);
});

// function add
// input.insertAdjacentHTML("afterbegin", input.value);
// input.addEventListener("submit", () => console.log("hello"));
// function (text) {
//     text = input
// }
// let text = input.value; // var e = document.getElementsByClassName("filter-members");
// console.log(e);
// var strUser = e.options[e.selectedIndex].value;
// function myFunction() {
//   var x = document.getElementById("filter-members");
//   console.log(x);
//   x.style.color = "red";
// }
// myFunction();
console.log(input.value, div);

function deleteCheck(e) {
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.remove();
  }
}
