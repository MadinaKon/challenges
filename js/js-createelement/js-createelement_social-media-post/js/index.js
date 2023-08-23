console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');

likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement("article");

article.classList.add("post");

pElement = document.createElement("p");
pElement.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
pElement.classList.add("post__content");

const footerElement = document.createElement("footer");
footerElement.classList.add("post__footer");

buttonElement = document.createElement("button");
buttonElement.type = "button";
buttonElement.classList.add("post__button");
buttonElement.textContent = " ♥ Like ";

buttonElement.setAttribute("data-js", "like-button-2");

const spanElement = document.createElement("span");
spanElement.classList.add("post__username");
spanElement.textContent = "@username";

footerElement.append(spanElement);
footerElement.append(buttonElement);

article.append(pElement);
article.append(footerElement);

document.body.append(article);
const likeButton2 = document.querySelector('[data-js="like-button-2"]');
likeButton2.addEventListener("click", handleLikeButtonClick);
