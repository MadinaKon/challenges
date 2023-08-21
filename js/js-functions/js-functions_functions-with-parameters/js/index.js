console.clear();

logSeparator("Exercise 1:", "-------------");
/*
1: The function below is not executed. Can you figure out why? Find the bug and fix it.
*/

// Uncomment the next line of code and figure out why it does not work:
// Solution was to add the missing parentheses, when invoking the function logText
logText();

function logText() {
  console.log("This text does not appear. Why?");
}

logSeparator("Exercise 2:", "-------------");

/*
2: Look at the functions below. They are almost identical. Can you find a way to generalize them into a new function with an input parameter? Replace the function calls below with your new function.
*/

// --v-- write your code here --v--

function greet(name) {
  console.log(`Welcome ${name}, good to see you again!`);
}

greet("Bob");
greet("Alice");
greet("Mary");
// --^-- write your code here --^--

logSeparator("3:", "-------------");
/*
3: We log a little separation text for each subtask. This is repetitive code, so lets write a function 'logSeparator' which takes the number of the exercise as an input parameter
 and logs the respective separator. then use this function to replace the existing separator logs in this javascript file.
*/

// --v-- write your code here --v--
function logSeparator(numberOfExercise, separator) {
  console.log(numberOfExercise);
  console.log(separator);
}

// --^-- write your code here --^--
