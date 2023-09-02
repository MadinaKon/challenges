import { recipes } from "./recipes.js";
/*
 1: `map` exercises
*/
// ['Crepes', ...]
const onlyTitles = recipes.map((recipe) => recipe.title);

// ['Crepes (60min)', ...]
const titlesWithDuration = recipes.map(
  (recipe) => recipe.title + " " + recipe.duration
);

// [20, 10, 432, 12]
const timePerServing = recipes.map(
  (recipe) => recipe.duration / recipe.servings
);

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

// 'Crepes, Scrambled Eggs, ...'
const allTitlesInOneString = recipes.map((recipe) => recipe.title).join(", ");

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = recipes.filter(
  (recipe) => recipe.duration <= 60
);

const allRecipesWithMoreThan2Servings = recipes.filter(
  (recipe) => recipe.servings > 2
);

const allRecipesWithTitlesLongerThan12Characters = recipes.filter(
  (recipe) => recipe.title.length > 12
);

console.log("onlyTitles ", onlyTitles);
console.log("titlesWithDuration ", titlesWithDuration);
console.log("timePerServing ", timePerServing);
console.log(allTitlesInOneString);
console.log(
  "recipesThatOnlyTake60minutesOrLess ",
  recipesThatOnlyTake60minutesOrLess
);

console.log(
  "allRecipesWithMoreThan2Servings ",
  allRecipesWithMoreThan2Servings
);

console.log(
  "allRecipesWithTitlesLongerThan12Characters ",
  allRecipesWithTitlesLongerThan12Characters
);
export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
