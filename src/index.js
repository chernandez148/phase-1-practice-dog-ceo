const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogBreedData = "https://dog.ceo/api/breeds/list/all";
const div = document.querySelector("#dog-image-container");
const ul = document.querySelector("#dog-breeds");

fetch(imgUrl)
  .then((resp) => resp.json())
  .then((imageData) => imageData.message.forEach(renderImages));

fetch(dogBreedData)
  .then((resp) => resp.json())
  .then((breedData) => {
    for (const breed in breedData.message) {
      renderBreeds(breed);
    }
  });

renderImages = (imageUrl) => {
  const img = document.createElement("img");
  img.src = imageUrl;
  div.appendChild(img);
};

renderBreeds = (breedUrl) => {
  const li = document.createElement("li");
  li.textContent = breedUrl;
  ul.appendChild(li);
};
