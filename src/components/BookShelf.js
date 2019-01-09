import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

export default class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.title}>
                <Book 
                  value={book}
                  books={this.props.books}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
