const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];


// Unsplash API

const count = 10;
const apiKey = "Q5xWXyMxMtmXWVDhcmbrze_AsbWThJ5syG-k4-O6VUo";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&${count}=`;

// Get Pics

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
  } catch (error) {

  }
}

getPhotos();