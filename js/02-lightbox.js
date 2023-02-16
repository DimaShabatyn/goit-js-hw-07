import { galleryItems } from './gallery-items.js';
// Change code below this line

//отримати доступ до ul
const gallery = document.querySelector('.gallery');
//перебираємо масив для отримання одного зображення
// та інші по черзі, а також створюємо Li
// galleryItems.map(({preview, original, description}) => {
// `<li>
// <a class="gallery__item" href="${original}">
// <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>
// </li>`
// }).join('')
// console.log(galleryItems);

//присвоюємо в змінну результат створеного масиву - довгий рядок з li
// const markup = galleryItems.map(({preview, original, description}) => {
//     return `<li>
//     <a class="gallery__item" href="${original}">
//     <img class="gallery__image" src="${preview}" alt="${description}" />
//     </a>
//     </li>`
//     }).join('');

// console.log(galleryItems);
// console.log(markup);

//неявне повернення
    const markup = galleryItems.map(({preview, original, description}) => `<li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`).join('');
        console.log(markup);

//вставимо розмітку-рядок в ul
// gallery.insertAdjacentHTML('beforeend', markup);
gallery.innerHTML = markup;

//додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу 
//і з'являється через 250 мілісекунд після відкриття зображення.
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', 
    captionPosition: 'bottom', 
    captionDelay: 250, });
