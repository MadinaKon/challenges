console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (let programmingLanguage of programmingLanguages) {
  // create li tag
  // textContent one of strings inside array
  // append the li to ol

  const listItem = document.createElement("li");
  listItem.textContent = programmingLanguage;

  ol.append(listItem);
}
// --^-- write/change code here --^--
