/**
 * Generates the HTML markup for the home view.
 * @return {string} The HTML markup for the home view.
 */
export const toHomeView = () => `
<div id="home">
  <h1>TIPHY</h1>
  <div class="content">
    <p>Welcome to Tiphy! This is one of Telerik's gifs databases. You can: </p>
    <ul>
      <li>Search a gif with a keyword</li><br>
      <li>See trending gifs</li><br>
      <li>Add a gif to Favorites</li><br>
      <li>Upload your own gif!</li>
    </ul>
  </div>
</div>
`;
