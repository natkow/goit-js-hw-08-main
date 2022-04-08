import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

for (let i of galleryItems) {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");
    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = i.original;
    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = i.preview;
    galleryImage.setAttribute("data-source", i.original);
    galleryImage.alt = i.description;
    galleryList.append(galleryItem);
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);
    galleryList.insertAdjacentHTML("beforeend", galleryImage.innerHTML);
}

let gallery = new SimpleLightbox('.gallery__link');

export default gallery;