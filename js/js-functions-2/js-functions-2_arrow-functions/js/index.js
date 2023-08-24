console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

let getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour === 0) "12am";
  else if (currentHour === 12) "12pm";
  else if (currentHour <= 11) currentHour + "am";
  else currentHour - 12 + "pm";
};

let getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

let cleanInput = (string) => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};

// Solution
function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

const add3 = (a, b, c) => a + b + c;

function add3(a, b, c) {
  return a + b + c;
}

const repeat10 = (string) => string.repeat(10);

function repeat10(string) {
  return string.repeat(10);
}
