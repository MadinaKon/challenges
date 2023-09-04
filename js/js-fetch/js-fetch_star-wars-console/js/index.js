console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log("response ", response);

    const jsonObj = await response.json();
    console.log("jsonObj", jsonObj);
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
