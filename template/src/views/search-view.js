import { toGifSimple } from './gif-views.js';


export const toSearchView = (gifs, searchTerm) => `
<div id="search-gif">
  <h1>Gifs found for "${searchTerm}":</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n') || '<p>No GIFs found. Try a different search term</p>'}
  </div>
</div>
`;
