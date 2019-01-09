import React from "react";
import "./App.css";
import BookShelf from "./BookShelf";
import { Route, Link } from "react-router-dom";
import * as BookAPI from '../api/BooksAPI';
import BookList from "./BookList";
import SearchBar from "./SearchBar";

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.loadAllBooks();
  }

  loadAllBooks = () => {
    BookAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  changeShelf = (book, shelf) => {
    BookAPI.update(book, shelf)
      .then((books) => {
        this.setState((prevState) => {
          // clone previous state
          let nextState = Object.assign({}, prevState);
          
          // check if the moved book was in the list
          const existingBook = nextState.books.find(b => b.id === book.id);

          if (existingBook) {
            // update the shelf
            existingBook.shelf = shelf;
          } else {
            // add the new book (from search) to list
            book.shelf = shelf;
            nextState.books.push(book);
          }

          return nextState;
        })
      })
  }

  render() {
    return <div className="app">
        <Route path="/search" render={() => (
          <SearchBar 
            books={this.state.books} 
            changeShelf={this.changeShelf}
          />
        )} />
        <Route exact path="/" render={() => (
          <BookList 
            books={this.state.books} 
            changeShelf={this.changeShelf}
          />
        )} />
      </div>;
  }
}

export default BooksApp;
