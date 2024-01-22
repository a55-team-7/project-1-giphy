import { toGifSimple } from "./gif-views.js";

/**
 * Converts an array of favorite gifs and a random gif into a HTML string representing the favorites view.
 * @param {Array} favoriteGifs - The array of favorite gifs.
 * @param {Object} randomGif - The random gif object.
 * @returns {string} The HTML string representing the favorites view.
 */
export const toFavoritesView = (favoriteGifs, randomGif) => `
<div id="gifs">
  <h1>You can see your favourites here! </h1>
  <div class="content">
  <p>Total liked: ${favoriteGifs.length}</p>
    ${favoriteGifs.map(toGifSimple).join('\n') || `<p>Like some gifs to see them here.</p><p>Loading random:</p>${toGifSimple(randomGif)}`}
  </div>
</div>
`;
