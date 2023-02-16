import { galleryItems } from './gallery-items.js';
// Change code below this line

//пошук елемента ul
const gallery = document.querySelector('.gallery');

//перебираємо масив і присвоюємо рядок у змінну
// const markup = galleryItems.map(({preview, original, description}) => `<li>
// <div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`).join('');

//вставимо розмітку в ul
// gallery.insertAdjacentHTML('beforeend', markup);
// console.log(galleryItems);
// console.log(markup);

//Спосіб через функцію (колбеки)
function createMarkup(items) {
    return items.map(({ preview, original, description }) => `<li>
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
  </li>`).join('');
}

//викликаємо функцію
const markup = createMarkup(galleryItems);

//вставимо розмітку в ul
gallery.insertAdjacentHTML('beforeend', markup);

//вішаємо слухач подій на галерею, використовуючи метод делегування
gallery.addEventListener('click', onModalOpen);

function onModalOpen(event) {
    event.preventDefault();
    // console.log('currentTarget', event.currentTarget);
    // console.log('Target', event.target.nodeName)
    // console.dir(event.target.dataset.source);
    const sourceImg = event.target.dataset.source;
    
    // if (event.target.nodeName !== 'IMG') return;
    const isClassName = event.target.classList.contains('gallery__image');
    if (!isClassName) return;

    //ініціалізація бібліотеки
    const instance = basicLightbox.create(`
    <img src="${sourceImg}" width="800" height="600">`, {
        onShow: (instance) => {window.addEventListener('keydown', onEscPress)},
	    onClose: (instance) => {window.removeEventListener('keydown', onEscPress)},
    })
    instance.show();

    function onEscPress(event) {
        // console.log(event.code)
        if (event.code !== 'Escape') return;
        instance.close();
    }
}


//Другий варіант
// const instance = basicLightbox.create(
//     `
//   <img width="1280" height="auto" src="">`,
//     {
//       onShow: (instance) => {
//         window.addEventListener('keydown', onEscKeyPress);
//       },
//       onClose: (instance) => {
//         window.removeEventListener('keydown', onEscKeyPress);
//       },
//     }
//   );

//   function onModalOpen(e) {
//     e.preventDefault();
//     const datasetSource = e.target.dataset.source;
//     if (!datasetSource) return;
//     instance.element().querySelector('img').src = datasetSource;
//     instance.show();
//   }

//   function onEscKeyPress(e) {
//     if (e.code !== 'Escape') return;
//     instance.close();
//   }