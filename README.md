# Project 1: Giphy API - Team 7

This project is a Single Page Application (SPA) that utilizes the Giphy API to search and share funny gifs with your friends. You can find the top trending gifs, upload gifs, and much more!

## Core Features

- **Display Trending Gifs**: The application displays the top trending gifs using the trending endpoint of the Giphy API. The number of gifs displayed can be limited using the `limit` parameter.

- **Search Gifs**: Users can search for gifs using a query. This feature uses the search endpoint of the Giphy API with a user-provided search query (`q`). The number of search results can be limited using the `limit` parameter.

- **Display Gif Details**: Users can view detailed information about a gif, such as the username of the uploader. This feature uses the `get-gif-by-id` endpoint of the Giphy API with the id of the desired gif (`gif_id`).

- **Upload Gif**: Users can upload a gif from their file system. This feature uses the upload endpoint of the Giphy API with a POST request containing the API key and a file object sent as form data in the request body. Uploaded gifs can be viewed in the user's Giphy Channel.

## Additional Features

- **Display Uploaded Gifs**: Users can view their uploaded gifs. This is achieved by storing the ids of the uploaded gifs in the browser’s local storage and then using the `get-gifs-by-id` endpoint of the Giphy API with the desired ids.

- **Favorite Gif**: Users can mark a gif as their favorite and display it within the app. If a user hasn't chosen a favorite gif yet, they are notified and a random gif is shown as a favorite. This is achieved by storing the id of the favorite gif in the browser’s local storage and then using the `get-gif-by-id` endpoint of the Giphy API. If the user has no favorite gif yet, the `random` endpoint is used.

## General Requirements

- Use Native DOM API for DOM manipulations.
- Use Git for source code management and team collaboration.
- Use GitLab’s issue tracking system.
- Use ESLint for consistent code styling.
- Use modules that are single-responsible.
- Document code explicitly following the JSDoc standard.
- Use correct naming and write clean, self-documenting code.
- Have a usable user interface.
- Use the latest features of ECMAScript.
- External libraries such as Bootstrap, Materialize or others can be used for styling.
- External libraries such as jQuery UI, Kendo UI or others can be used for custom controls.