import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookShelves from "./BookShelves";

export default class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelves 
            books={this.props.books} 
            isLoading={this.props.isLoading}
            isDataReady={this.props.isDataReady}
          />
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}