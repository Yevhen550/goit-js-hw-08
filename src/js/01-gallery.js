import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                alt="${item.description}"
            />
        </a>`
  )
  .join('');
gallery.innerHTML = markup;

gallery.addEventListener('click', handleClick);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
function handleClick(event) {
  event.preventDefault();
  const element = event.target;
  lightbox.open(element);
}
