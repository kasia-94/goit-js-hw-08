// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';

import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCards(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCards(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <li><a class="gallery__item" href="${original}">
      <img class = 'gallery__image' src="${preview}"
      data-source="${original}" 
      alt="${description}"/>
      </a></li>`;
    })
    .join('');
}
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
  overlayOpacity: 0.9,
});
