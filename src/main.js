import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const query = event.currentTarget.elements.query.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search query' });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();
      
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#FFFFFF',
          iconColor: '#FFFFFF',
          theme: 'dark',
          progressBarColor: '#B51B1B',
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({ message: 'Something went wrong. Please try again later.' });
      console.error(error);
    })
    .finally(() => {    
      form.reset();
    });
});




