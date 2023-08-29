console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    let newImage = document.createElement("img");
    newImage.src = "./assets/star-empty.svg";

    if (i <= filledStars) {
      newImage.src = "./assets/star-filled.svg";
    }

    newImage.addEventListener("click", () => {
      renderStars(i);
    });

    starContainer.append(newImage);
  }
  //--^-- your code here --^--
}

renderStars();
