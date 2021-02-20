let data = [];

const form = document.querySelector(".form");
const input = document.querySelector("#input");
const selectors = document.querySelectorAll("#second-page select");
const calendarRow = document.getElementsByTagName("tr");

form.addEventListener("submit", add);

function add(e) {
  e.preventDefault();
  data.push(
    Object.assign(
      { text: input.value },
      Array.from(selectors).reduce(
        (acc, cur) => ({
          ...acc,
          [cur.id]: cur.value,
        }),
        {}
      )
    )
  );

  if (data !== []) {
    let cells = calendarRow[data[data.length - 1].time].querySelectorAll("td");
    console.log(data);
    cells[data[data.length - 1].day].appendChild(newEvent());
    // cells.appendChild();
  }
}

function newEvent() {
  let eventDiv = document.createElement("div");
  eventDiv.id = "event";
  eventDiv.setAttribute("style", "float:left;width:100%;background-color:red");
  eventDiv.insertAdjacentHTML("afterbegin", data[data.length - 1].text);
  console.log(eventDiv);
  return eventDiv;
}
