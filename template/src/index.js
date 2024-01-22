import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage,  renderGifDetails } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import {uploadGif } from './events/upload-events.js';

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




  /**
   * Handles the scroll event and toggles the visibility of the banner element based on the scroll direction.
   */
  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    let prevScrollPos = window.pageYOffset;
    if (prevScrollPos < currentScrollPos) {
    
      document.getElementById('banner').classList.add('hidden');
    } else {
     
      document.getElementById('banner').classList.remove('hidden');
    }

    prevScrollPos = currentScrollPos;
  }

  window.onscroll = handleScroll;

  loadPage(HOME);

});