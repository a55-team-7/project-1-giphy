import { toGifSimple } from "./gif-views.js";

export const toUploadedView = (uploadedGifs) => `
<div id="movies">
  <h1>Uploaded Gifs:</h1>
  <div class="content">
    ${uploadedGifs.map(toGifSimple).join('\n') || '<p>Upload some gifs to see them here.</p>'}
  </div>
</div>
`;