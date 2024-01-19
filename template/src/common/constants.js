export const HOME = 'home';

// export const CATEGORIES = 'categories';

export const FAVORITES = 'favorites';

export const ABOUT = 'about';

export const CONTAINER_SELECTOR = '#container';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';

export const TRENDING = 'trending';

export const API_KEY = 'GB1eH419EgtMMzttQ7t1wOClKAcArPG4';

export const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g`;

export const getTrendingURL = (limit = 25, offset = 0) => `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;

export const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=&limit=25&offset=0&rating=g`;

export const displayGifDetailsURL = `https://api.giphy.com/v1/gifs/?api_key=${API_KEY}&rating=g`;

export const uploadURL = `https://upload.giphy.com/v1/gifs/?api_key=${API_KEY}`;