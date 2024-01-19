import { renderFavoriteStatus } from "../events/favorites-events.js";
/**
 * 
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
    <h2>Trending</h2
    <div>
    ${trendingGifs.map(toSingleTrendingGifView).join('')}
    </div>
    </section>
    `;
}

const toSingleTrendingGifView = (gif) => {
    return `
    <li>
    <a href="#/trending/${gif.id}">
    <img src="${gif.images.fixed_width.url}" alt="${gif.title}">
    </a>
    <p>
    ${renderFavoriteStatus(gif.id)}
    </p>
    </li>
    `
}