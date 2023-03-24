const dogId = document.getElementById("dogImg");
const dogId2 = document.getElementById("dogImg2");
const apiKey = "api_key=XvIygYqvnQXrI6xNDyyJt9S9LemYQ962";

async function showGiphs() {
  try {
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?${apiKey}&q=dogs`);
    const result = await response.json();
    dogImg1 = result.data[0].images.original.url;
    dogImg2 = result.data[1].images.original.url;
    dogId.src = dogImg1;
    dogId2.src = dogImg2;

  } catch (error) {
    console.error(error);
  }
}

showGiphs();
