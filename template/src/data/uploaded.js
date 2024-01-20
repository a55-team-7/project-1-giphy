let uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

export const addUpload = (gifId) => {
  if (uploaded.find(id => id === gifId)) {
    return;
  }

  uploaded.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

export const getUploadedIds = () => [...uploaded];