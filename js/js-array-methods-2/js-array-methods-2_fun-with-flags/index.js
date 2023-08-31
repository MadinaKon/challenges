import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

// 1. Find One Matching Country
// Inside the event listener, use the find method to find the country in the countries array
// which name starts with the search string.
// 💡 Strings have a method startsWith(string), which might be helpful.
// 💡 Each contry in the array as a name attribute.

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  const foundCountry = countries.find((country) =>
    country.name.startsWith(searchString)
  );

  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
});
