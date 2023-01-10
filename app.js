const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 5, 27, 16, 30, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 16, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = months[futureDate.getMonth()];
let day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${minutes} pm`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);

  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1d = 24hr

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculating all required values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //Set values array

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  const values = [days, hours, minutes, seconds];
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
