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

export const loadRandomGif = async() => {
  const response = await fetch(getRandomURL());
  const result = await response.json();
  return result.data;
};

export const loadSingleGifById = async(id) => {
  const response = await fetch(getGifByIdURL(id));
  const result = await response.json();
  return result.data; 
};

export const loadSearchGif = async (searchTerm = '') => {
  const response = await fetch(getSearchURL(25, 0, searchTerm));
  const result = await response.json();
  return result.data;
};

