import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import * as BookAPI from '../api/BooksAPI';
import BookList from "./BookList";
import SearchBar from "./SearchBar";

class BooksApp extends React.Component {

  state = {
    books: [],
    booksError: false,
    booksLoading: true,
  }

  componentDidMount() {
    this.loadAllBooks();
  }

  loadAllBooks = () => {
    this.setState({booksLoading: true})

    BookAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
          booksError: false
        }))
      })
      .catch((err) => {
        this.setState(() => ({
          books: [],
          booksError: true
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
            isError={ this.state.booksError }
            isLoading={ this.state.booksLoading }
            isDataReady={ this.state.books.length > 0 }
          />
        )} />
      </div>;
  }
}

export default BooksApp;
