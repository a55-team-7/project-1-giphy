import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage,  renderGifDetails } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { toggleUploadStatus, uploadGif } from './events/upload-events.js';

document.addEventListener('DOMContentLoaded', () => {
  // add global listener

  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {

      loadPage(event.target.getAttribute('data-page'));
    }

    // show category events
    // if (event.target.classList.contains('view-category-btn')) {
    //   renderCategory(+event.target.getAttribute('data-category-id'));
    // }

    // show movie events
    if (event.target.classList.contains('view-gif-btn')) {
      renderGifDetails(event.target.getAttribute('data-gif-id'));
    }

    // toggle favorite event
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
    }

    if(event.target.classList.contains('update-submit')) {
        uploadGif(event);
    }
  });

  // search events
  q('input#search').addEventListener('input', e => {
    renderSearchItems(e.target.value);
  });


  loadPage(HOME);

});