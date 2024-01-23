import { CONTAINER_SELECTOR } from '../common/constants.js';
import { loadSearchGif } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';

/**
 * Renders search items based on the given search term.
 * @param {string} searchTerm - The search term to be used for loading GIFs.
 * @return {Promise<void>} - A promise that resolves when the search items are rendered.
 */
export const renderSearchItems = async (searchTerm) => {
  const gifs = await loadSearchGif(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs, searchTerm);
};
