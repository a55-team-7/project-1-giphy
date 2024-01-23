export const searchGif = (title = '') => title
  ? gifs.filter(g => g.title.toLowerCase().includes(title.toLowerCase()))
  : gifs;
