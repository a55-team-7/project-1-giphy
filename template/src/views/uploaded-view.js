import { toGifSimple } from "./gif-views.js";

/**
 * Converts an array of uploaded gifs into an HTML string representing the uploaded view.
 * @param {Array} uploadedGifs - The array of uploaded gifs.
 * @returns {string} The HTML string representing the uploaded view.
 */
export const toUploadedView = (uploadedGifs) => `
<div id="uploaded-gifs">
  <h1>Uploaded Gifs:</h1>
  <div class="content">
    ${uploadedGifs.map(toGifSimple).join('\n') || '<p>Upload some gifs to see them here.</p>'}
  </div>
</div>
`;