console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const jsonObj = await response.json();

    const results = jsonObj.results;

    const r2d2 = results.find((result) => result.name === "R2-D2");

    const r2d2EyeColor = r2d2.eye_color;
    console.log("r2d2EyeColor ", r2d2EyeColor);

    if (!response.ok) {
      console.log("Bad request ", response);
    } else {
      console.log("Successfull response ", response);
    }
  } catch (error) {
    console.log("Catch block", error);
  }
}

fetchData();
