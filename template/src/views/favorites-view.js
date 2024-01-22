import { toGifSimple } from "./gif-views.js";

export const toFavoritesView = (favoriteGifs, randomGif) => `
<div id="gifs">
  <h1>You can see your favourites here! </h1>
  <div class="content">
  <p>Total liked: ${favoriteGifs.length}</p>
    ${favoriteGifs.map(toGifSimple).join('\n') || `<p>Like some gifs to see them here.</p><p>Loading random:</p>${toGifSimple(randomGif)}`}
  </div>
</div>
`;
