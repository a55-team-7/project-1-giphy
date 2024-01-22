import { toGifSimple } from "./gif-views.js";

/**
 * Converts an array of favorite gifs and a random gif into a HTML string representing the favorites view.
 * @param {Array} favoriteGifs - The array of favorite gifs.
 * @param {Object} randomGif - The random gif object.
 * @returns {string} The HTML string representing the favorites view.
 */  /*${favoriteGifs.map(toGifSimple) || `<p>Like some gifs to see them here.</p><p>Loading random:</p>${toGifSimple(randomGif)}`}*/
export const toFavoritesView = (favoriteGifs, randomGif) => `
<div id="gifs">
  <h1>You can see your favourites here! </h1>
  <div class="content">
  <p>Total liked: ${favoriteGifs.length}</p>
  ${chooseRandomOrFavourite(favoriteGifs, randomGif)}
  </div>
</div>
`;

/**
 * Returns an array of simplified GIF objects if there are favorite GIFs,
 * otherwise returns a single simplified GIF object.
 * @param {Array} favoriteGifs - The array of favorite GIF objects.
 * @param {Object} randomGif - The random GIF object.
 * @returns {(Array|Object)} - An array of simplified GIF objects or a single simplified GIF object.
 */
const chooseRandomOrFavourite = (favoriteGifs, randomGif) => {
  if (favoriteGifs.length > 0) {
    return favoriteGifs.map(toGifSimple);
  } else {
    return toGifSimple(randomGif);
  }
}