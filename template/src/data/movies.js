import { movies, categories } from './movies-data.js';
import { loadSearchGif } from '../requests/request-service.js';
import { getSearchURL, API_KEY } from '../common/constants.js';

const findCategory = (categoryId) => {
  return categories.find(c => c.id === categoryId) || { id: -1, name: '' };
}

// public API

export const getGifGeneralInfo = (categoryId = null) => {

  const moviesFilter = categoryId
    ? m => m.genre === findCategory(categoryId).name
    : () => true;

  return movies
    .filter(moviesFilter)
    .map(m => ({
      id: m.id,
      title: m.title,
      genre: m.genre,
      year: m.year,
      poster: m.poster,
    }));
};

export const getMoviesFullInfo = (categoryId = null) => {
  if (categoryId) {
    return movies
      .filter(m => m.genre === findCategory(categoryId).name);
  }

  return movies;
};

export const getMovieById = (movieId = 0) => movies.find(m => m.id === movieId);

// export const searchGif = (title = '') => title
//   ? movies.filter(m => m.title.toLowerCase().includes(title.toLowerCase()))
//   : movies;

export const searchGif = async (query = '') => {
  const searchURL = getSearchURL(25, 0) + `q=${query}&api_key=${API_KEY}`;

  try {
    const result = await loadSearchGif(searchURL);
    return result ? result : [];
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
};

export const getCategory = (categoryId = null) => {
  return categories.find(c => c.id === categoryId) || null;
}

export const getCategories = () => categories
  .map(category => ({
    ...category,
    moviesCount: movies.filter(m => m.genre === category.name).length,
  }));