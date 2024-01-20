import { toGifSimple } from "./gif-views.js";

export const toFavoritesView = (favouriteGifs) => `
<div id="movies">
  <h1>Favorite Gifs:</h1>
  <div class="content">
    ${favouriteGifs.map(toGifSimple).join('\n') || '<p>Like some gifs to see them here.</p>'}
  </div>
</div>
`;
