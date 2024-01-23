import { uploadURL, API_KEY } from "../common/constants.js";
import { addUpload, getUploadedIds } from "../data/uploaded.js";
import { q } from "./helpers.js";

/**
 * Toggles the upload status of a GIF.
 * If the GIF ID is not already in the list of uploaded IDs, it adds it.
 * 
 * @param {string} gifId - The ID of the GIF.
 */
export const toggleUploadStatus = (gifId) => {
    const uploadedIds = getUploadedIds();
    
    if (!uploadedIds.includes(gifId)) {
      addUpload(gifId);
    }
};


/**
 * Uploads the gif
 * If the upload is successful, the gif's uploaded status is triggered
 * 
 * @param event - the upload gif event
 */
export const uploadGif = (event) => {

    event.preventDefault();

    const form = q('form#upload-form');
    let formData = new FormData(form);
    formData.append('api_key', API_KEY);

    fetch(uploadURL, {
        method: 'POST',
        body: formData,
    })
    .then(data => data.json())
    .then(data => toggleUploadStatus(data.id));
}