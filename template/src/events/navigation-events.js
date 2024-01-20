import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING, UPLOAD, UPLOADED } from '../common/constants.js';
import {  loadSingleGifById,  loadTrendingGifs, loadRandomGif } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import {  toSingleGifView  } from '../views/gif-views.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadView } from '../views/upload-view.js';
import { toUploadedView } from '../views/uploaded-view.js';
import { getUploadedIds } from '../data/uploaded.js';

// public API
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

export const renderGifDetails = (id = null) => {
  const movie = loadSingleGifById(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView();
};

//NOT SURE BUT I THINK IT NEEDS TO BE REMOVED
// export const renderCategory = (categoryId = null) => {
//   const category = loadCategory(categoryId);
//   const movies = loadMovies(category.id);

//   q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
// };

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = async() => {
  const trendingGifs = await loadTrendingGifs();

  q(CONTAINER_SELECTOR).innerHTML =  toTrendingView(trendingGifs);
};

//Upload needs to be implemented

const renderUpload = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
}

const renderUploaded = async() => {
  const uploadedIds = getUploadedIds();
  const gifs = await Promise.all(uploadedIds.map(id => loadSingleGifById(id)));

  q(CONTAINER_SELECTOR).innerHTML = toUploadedView(gifs);
};

const renderFavorites = async() => {
  const favorites = getFavorites();
  const favoriteGifs = await Promise.all(favorites.map(id => loadSingleGifById(id)));
  const randomGif = await loadRandomGif();

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteGifs, randomGif);
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
