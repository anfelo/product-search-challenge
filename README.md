# Product Search Challenge

This is an Express - React app for searching products using Mercado Libre's API. User can do the following:
* From any page, search a product with the top search bar
* See a list of search results (limited to 4 results for now)
* View the detail of a product

## Available Scripts

In the project directory, you can run:

### `npm start`

Builds the frontend and runs the server in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm start:dev`

Starts the frontend app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

(Note: Must run `npm run serve` or `npm run serve:dev` in another console tab, to run the server)

### `npm serve`

Starts the Express server.<br />
API calls available:
* GET `http://localhost:5000/api/items?q=:query`
* GET `http://localhost:5000/api/items/:id`

### `npm serve:dev`

Starts the Express server in development mode using `nodemon` to watch for changes.<br />

### `npm run build`

Builds the frontend app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
