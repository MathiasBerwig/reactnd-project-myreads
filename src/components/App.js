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
        // move books to their respective bookshelfs or just update all?
      })
  }

  render() {
    return <div className="app">
        <Route path="/search" render={() => (
          <SearchBar books={this.state.books} />
        )} />
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} />
        )} />
      </div>;
  }
}

export default BooksApp;
