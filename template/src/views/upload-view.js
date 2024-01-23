/**
 * Generates the HTML markup for the upload view.
 * @return {string} The HTML markup for the upload view.
 */
export const toUploadView = () => `
<div class="update">
  <div class="content">
    <h1>Upload your own GIFs</h1>
    <form id="upload-form" class="update-submit"action="/api" method="post" enctype="multipart/form-data">
        <label for="file"></label>
        <input id="upload-file" name="file" type="file" />
        <p>
        <button type="submit" class="update-submit">Upload</button>
        </p>
    </form>
  </div>
</div>
`;
