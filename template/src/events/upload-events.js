import { uploadURL, API_KEY } from "../common/constants.js";
import { addUpload, getUploadedIds } from "../data/uploaded.js";
import { q } from "./helpers.js";

export const toggleUploadStatus = (gifId) => {
    const uploadedIds = getUploadedIds();
    
    if (!uploadedIds.includes(gifId)) {
      addUpload(gifId);
    }
};

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
    .then(data => toggleUploadStatus(data.data.id));
}