import { getGifByIdURL, getSearchURL, getTrendingURL, getRandomURL } from '../common/constants.js';

/**
* 
* @returns {Promise<Array<{
* id: string,
* rating: string,
* title: string,
* images: {
*  fixed_width: {
*      url: string,
*  },
* },
* user: {
*  avatar_url: string,
*  username: string,
* },
* }>>} - array of trending gifs
*/
export const loadTrendingGifs = async() => {
  const response = await fetch(getTrendingURL(30));
  const result = await response.json();
  return result.data;
};

/**
 * Loads a random GIF by making an asynchronous request.
 * @returns {Promise<Object>} A promise that resolves to the data of the random GIF.
 */
export const loadRandomGif = async() => {
  const response = await fetch(getRandomURL());
  const result = await response.json();
  return result.data;
};

/**
 * Loads a single GIF by its ID.
 * @param {string} id - The ID of the GIF.
 * @returns {Promise<Object>} - A promise that resolves to the data of the loaded GIF.
 */
export const loadSingleGifById = async(id) => {
  const response = await fetch(getGifByIdURL(id));
  const result = await response.json();
  return result.data; 
};

/**
 * Loads search GIFs based on the provided search term.
 * @param {string} searchTerm - The search term to be used for searching GIFs.
 * @returns {Promise<Array>} - A promise that resolves to an array of search results.
 */
export const loadSearchGif = async (searchTerm = '') => {
  const response = await fetch(getSearchURL(25, 0, searchTerm));
  const result = await response.json();
  return result.data;
};

