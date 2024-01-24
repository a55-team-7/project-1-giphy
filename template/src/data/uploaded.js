const uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * Adds a GIF ID to the uploaded array and stores it in local storage.
 * @param {string} gifId - The ID of the GIF to be added.
 */
export const addUpload = (gifId) => {

  uploaded.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

/**
 * Retrieves an array of uploaded IDs.
 * @return {Array} An array of uploaded IDs.
 */
export const getUploadedIds = () => [...uploaded];
