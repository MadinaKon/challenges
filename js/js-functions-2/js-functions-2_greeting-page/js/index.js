console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

const currentTime = new Date().getHours();
const currentWeekDay = new Date().getDay();

let arrayOfWeekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

let weekdayName = arrayOfWeekdays[currentWeekDay];

console.log("currentTime ", currentTime);
console.log("currentWeekDay ", weekdayName);

function getGreeting() {
  if (currentTime >= 6 && currentTime <= 12) {
    return "Good Morning";
  } else if (currentTime >= 13 && currentTime <= 18) {
    return "Good Afternoon";
  } else if (currentTime >= 19 && currentTime <= 22) {
    return "Good Evening";
  } else if (currentTime >= 23 && currentTime <= 5) {
    return "Good Night";
  }
}

function getDayColor() {
  if (weekdayName === "monday") {
    return "darkgray";
  } else if (weekdayName === "tuesday" || weekdayName === "friday") {
    return "lightblue";
  } else if (weekdayName === "saturday" || weekdayName === "sunday") {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
