import { toGifSimple } from './gif-views.js';

//TO IMPLEMENT
export const toSearchView = (gifs, searchTerm) => `
<div id="movies">
  <h1>Movies found for "${searchTerm}":</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;
