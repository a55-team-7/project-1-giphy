import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toGifsFromTrendingView = (gifs) => `
<div id="gifs-trending-view">
  <h1>${gifs.name} movies:</h1>
  <div class="content">
    ${gifs.map(toGifSimple).join('\n')}
  </div>
</div>
`;

export const toSingleGifView = (gif) => `
<div id="gif">
  <h1>${gif.title}</h1>
  <div class="content">
    ${toGifDetailed(gif)}
  </div>
</div>
`;

export const toGifSimple = (gif) => `
<div class="gifs">
  <h1>${gif.title || 'Untitled'}</h1>
  <img src="${gif.images}"><br>
  <button class="view-gif-btn" data-gif-id="${gif.id}">View details</button>  ${renderFavoriteStatus(gif.id)}
</div>
`;

const toGifDetailed = (gif) => `
<div class="gif-detailed">
  <div class="gif-content">
    <img src="${gif.images.fixed_width.url}">
  </div>
  <div class="gif-info">
    <h2>${gif.title}</h2>
    <h3>Uploaded by: ${gif.user.username}</h3>
    <h3>Uploaded: ${gif.import_datetime}</h3>
  </div>
</div>
`;
