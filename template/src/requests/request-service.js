import { getGifById, getTrendingURL } from '../common/constants.js';

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


export const loadSingleGif = async(data) => {
  const response = await fetch(getGifById(data.id));
  const result = await response.json();
  return result.data; 
};

//Upload needs to be implemented


//TO FINISH
export const loadSearchGif = async(searchTerm = '') => {
  const gifs = await searchGif(searchTerm);
  return gifs;
};
