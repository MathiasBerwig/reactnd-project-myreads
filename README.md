# MyReads Project for Udacity's React NanoDegree

This is based on the starter template for the final assessment project for Udacity's React Fundamentals course. 

## Student Notes

The project was coded with simplicity in mind and does not try to offer any extra feature besides the basic ones required for approval. There was an unfinished attempt to implement loading/error/etc screens (aka. empty states) which can be found on the `better-ui` branch. Due to my poor knoweledge of CSS, I ended not making any improvements on UI to not delay my course (hope to do another nanodegree on front end development soon).

This is my first study on Javascript and my background is mostly Java through Android apps development. So all feedbacks (even the most perfectionist ones) are welcome.

## Running the project

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Project structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # Index page for the app.
└── src
    ├── api
    │   └── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── components
    │   ├── App.css # Styles of the app.
    │   ├── App.js # This is the root of the app. 
    │   ├── App.test.js # Provided by Create React App. No changes were made.
    │   ├── Book.js # Single book with visible cover, title, authors and a BookShelf Changer button.
    │   ├── BookList.js # List all available bookshelves and a search button.
    │   ├── BookShelf.js # List of books.
    │   ├── BookShelfChanger.js # Button with dropdown for moving a book from one bookshelf to another.
    │   └── Search.js # Search bar with a grid for showing results (books).
    ├── icons # Icons of the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Backend Server

Udacity provided a backend server for the app development. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
