import { toGifSimple } from './gif-views.js';


/**
 * Converts an array of GIFs and a search term into a search view HTML string.
 *
 * @param {Array} gifs - The array of GIFs to display.
 * @param {string} searchTerm - The search term used to find the GIFs.
 * @return {string} - The HTML string representing the search view.
 */
export const toSearchView = (gifs, searchTerm) => `
<div class="trending">
  <h2>Gifs found for "${searchTerm}":</h2>
  <ul class="gif-list">
    ${gifs.map(toGifSimple).join('\n') || '<p>No GIFs found. Try a different search term</p>'}
  </ul>
</div>
`;
