// Unsplash API

const count = 10;
const apiKey = "Q5xWXyMxMtmXWVDhcmbrze_AsbWThJ5syG-k4-O6VUo";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&${count}=`;

// Get Pics

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {

  }
}

getPhotos();