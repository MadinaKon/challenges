console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i < 5; i++) {
    let image = document.createElement("img");
    image.src = "./assets/star-empty.svg";

    starContainer.append(image);
  }
  //--^-- your code here --^--
}

renderStars();
