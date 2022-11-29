const DT = document.getElementById("DateTime");

const date = new Date();

const time = date.getTime();
const todaysdate = date.getDate();
// const month = date.getMonth();
const year = date.getFullYear();

function displayDate() {
  const time = new Date().toLocaleTimeString();
  DT.innerText = time;
}

setInterval(() => {
  displayDate();
}, 500);

// console.log("Time:", time);
// console.log("Date:", todaysdate);
// console.log("Month:", month);
// console.log("Year:", year);
