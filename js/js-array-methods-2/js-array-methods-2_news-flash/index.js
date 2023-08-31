import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Have a look at the js/index.js file: There is a variable filteredNews declared with news.filter() and a return value true.

// You task is to change the filter method:

// filter all cards which have the category "politics" in their category array
// to do so, use the includes method on card.categories
// don't forget to remove the return statement because you don't need it.

// Part 1 - start here
const filteredNews = news.filter((card) =>
  card.categories.includes("politics")
);

console.log("filteredNews ", filteredNews);

// Part 2 - start here
const sortedNews = filteredNews;

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
