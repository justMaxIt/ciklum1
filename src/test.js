let data = [];

const form = document.querySelector(".form");
const input = document.querySelector("#input");
const selectors = document.querySelectorAll("#second-page select");

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
  const calendarRow = document.getElementsByTagName("tr");
  if (data !== []) {
    let cells = calendarRow[data[data.length - 1].time].querySelectorAll("td");
    console.log(calendarRow, cells);
    cells[data[data.length - 1].day].insertAdjacentHTML(
      "afterbegin",
      newEvent()
    );
  }
}
form.addEventListener("submit", add);

function newEvent() {
  return data[data.length - 1].text;
}
