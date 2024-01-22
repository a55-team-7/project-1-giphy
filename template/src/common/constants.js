export const HOME = 'home';

// export const CATEGORIES = 'categories';

export const FAVORITES = 'favorites';

export const ABOUT = 'about';

export const CONTAINER_SELECTOR = '#container';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';

export const TRENDING = 'trending';

export const UPLOAD = 'upload';

export const UPLOADED = 'uploaded';

export const API_KEY = 'GB1eH419EgtMMzttQ7t1wOClKAcArPG4';

export const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g`;

export const getTrendingURL = (limit = 35, offset = 0) => `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;

export const randomURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

export const getRandomURL = () => `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

export const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=&limit=25&offset=0&rating=g`;

export const getSearchURL = (limit = 25, offset = 0, searchTerm) => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=${limit}&offset=${offset}&rating=g`;

export const displayGifDetailsURL = `https://api.giphy.com/v1/gifs/?api_key=${API_KEY}&rating=g`;

export const getGifByIdURL = (gifID) => `https://api.giphy.com/v1/gifs/${gifID}?api_key=${API_KEY}&rating=g`;

export const uploadURL = `https://upload.giphy.com/v1/gifs`;

export const getUploadURL = () => `https://upload.giphy.com/v1/gifs`;