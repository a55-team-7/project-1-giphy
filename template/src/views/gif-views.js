import { renderFavoriteStatus } from '../events/favorites-events.js';

/**
 * Converts an array of gifs into a trending view HTML string.
 *
 * @param {Array} gifs - The array of gifs.
 * @return {string} - The HTML string representing the trending view.
 */
export const toGifsFromTrendingView = (gifs) => `
<div id="gifs-trending-view">
  <h1>${gifs.name} movies:</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
`;

/**
 * Converts a GIF object into a single GIF view HTML string.
 *
 * @param {object} gif - The GIF object.
 * @return {string} The HTML string representing the single GIF view.
 */
export const toSingleGifView = (gif) => `
<div id="gif">
  <h1>${gif.title}</h1>
  <div class="content">
    ${toGifDetailed(gif)}
  </div>
</div>
`;

/**
 * Converts a GIF object into a simple HTML representation.
 *
 * @param {Object} gif - The GIF object.
 * @return {string} The HTML representation of the GIF.
 */
export const toGifSimple = (gif) => `
  <li>
    <div class="gif-container">
      <a href="#/trending/${gif.id}">
        <img src="${gif.images.fixed_width.url}" alt="${gif.title}">
      </a>
      <div class="content" id="details">
        <button class="view-gif-btn" data-gif-id="${gif.id}">view details</button>
        ${renderFavoriteStatus(gif.id)}
      </div>
    </div>
  </li>
`;

/**
 * Converts a GIF object into a detailed HTML representation.
 *
 * @param {Object} gif - The GIF object to convert.
 * @return {string} The HTML representation of the GIF.
 */
export const toGifDetailed = (gif) => `
<div class="gif-detailed">
  <div class="gif-content">
    <img src="${gif.images.fixed_width.url}"><br>
  </div>
  <div class="gif-info">
    <h3>Uploaded by: ${gif.user.username}</h3>
    <h3>Uploaded: ${gif.import_datetime}</h3>
  </div>
</div>
`;
