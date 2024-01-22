import { renderFavoriteStatus } from "../events/favorites-events.js";

/**
 * @param {Array<{
* id: string,
* rating: string,
* title: string,
* images: {
*  fixed_width: {
*      url: string,
*  },
* },
* user: {
*  avatar_url: string,
*  username: string,
* },
* }>} trendingGifs
*/
export const toTrendingView = (trendingGifs) => {
  return `
   <section class="trending">
     <h2>Trending</h2>
     <div>
       ${trendingGifs.map(toSingleTrendingGifView).join('')}
     </div>
   </section>
 `;
};

const toSingleTrendingGifView = (trendingItem) => {
  return `
   <li>
   <div class="gif-container">
     <a href="#/trending/${trendingItem.id}">
       <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}">
     </a>
     <div class = "content" id="details">
     <button class="view-gif-btn" data-gif-id="${trendingItem.id}">view details</button>
      ${renderFavoriteStatus(trendingItem.id)}
      </div>
    </div>
   </li>
 `;
};
