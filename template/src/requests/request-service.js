import { getGifByIdURL, getTrendingURL } from '../common/constants.js';

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
  console.log(response);
  const result = await response.json();
  console.log(result);
  return result.data;
};


export const loadSingleGifById = async(id) => {
  const response = await fetch(getGifByIdURL(id));
  const result = await response.json();
  return result.data; 
};




//TO FINISH
export const loadSearchGif = async(searchTerm = '') => {
  const gifs = await searchGif(searchTerm);
  return gifs;
};
