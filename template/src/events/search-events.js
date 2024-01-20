import { CONTAINER_SELECTOR } from '../common/constants.js';
import { loadSearchGif } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';

export const renderSearchItems = async (searchTerm) => {
  const gifs = await loadSearchGif(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs, searchTerm);
};
