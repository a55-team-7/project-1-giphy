import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING, UPLOAD, UPLOADED } from '../common/constants.js';
import { loadSingleGifById, loadTrendingGifs, loadRandomGif } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toSingleGifView } from '../views/gif-views.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toUploadedView } from '../views/uploaded-view.js';
import { getUploadedIds } from '../data/uploaded.js';

// public API
/**
 * Loads the specified page and returns the rendered content.
 * @param {string} page - The page to load.
 * @return {HTMLElement|null} - The rendered content of the page, or null if the page is not supported.
 */
export const loadPage = (page = '') => {

  switch (page) {

  case HOME:
    setActiveNav(HOME);
    return renderHome();

  case UPLOAD:
    setActiveNav(UPLOAD);
    return renderUpload();

  case UPLOADED:
    setActiveNav(UPLOADED);
    return renderUploaded();

  case TRENDING:
    setActiveNav(TRENDING);
    return renderTrending();

  case FAVORITES:
    setActiveNav(FAVORITES);
    return renderFavorites();

  case ABOUT:
    setActiveNav(ABOUT);
    return renderAbout();

    /* if the app supports error login, use default to log mapping errors */
  default: return null;
  }

};

/**
 * Renders the details of a GIF by its ID.
 *
 * @param {string|null} id - The ID of the GIF to render. If null, it will render the default GIF.
 * @return {Promise<void>} - A promise that resolves when the GIF details are rendered.
 */
export const renderGifDetails = async (id = null) => {
  const gif = await loadSingleGifById(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif);
};


// private functions

/**
 * Renders the home view by updating the content of the container element.
 */
const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

/**
 * Renders the trending gifs on the page.
 * @return {Promise<void>} A promise that resolves when the rendering is complete.
 */
const renderTrending = async () => {
  const trendingGifs = await loadTrendingGifs();

  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};


/**
 * Renders the upload view by updating the innerHTML of the container element.
 */
const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/**
 * Renders the uploaded gifs.
 * @return {Promise<void>} A promise that resolves when the rendering is complete.
 */
const renderUploaded = async () => {
  const uploadedIds = getUploadedIds();
  const gifs = await Promise.all(uploadedIds.map(id => loadSingleGifById(id)));

  q(CONTAINER_SELECTOR).innerHTML = toUploadedView(gifs);
};

/**
 * Renders the favorites view by loading favorite GIFs and a random GIF.
 * @return {Promise<void>} A promise that resolves when the favorites view is rendered.
 */
const renderFavorites = async () => {
  const favorites = getFavorites();
  const favoriteGifs = await Promise.all(favorites.map(id => loadSingleGifById(id)));
  const randomGif = await loadRandomGif();

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteGifs, randomGif);
};

/**
 * Renders the about view by updating the innerHTML of the container element.
 */
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
