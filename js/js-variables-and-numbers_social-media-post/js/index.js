console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Daily Mail";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ";
let numberOfLikes = 33;
const postAuthor = "Madina";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("title is " + title);
console.log("text is " + text);
console.log("the number of likes at the beginning " + numberOfLikes);
console.log("the user who created the post " + postAuthor);
console.log("is it reported? " + isReported);

numberOfLikes = numberOfLikes += 1000;
numberOfLikes++;

console.log(numberOfLikes);
// --^-- write your code here --^--
