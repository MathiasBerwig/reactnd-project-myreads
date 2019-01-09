import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

export default class Book extends Component {
  static propTypes = {
    value: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
  };

  render() {
    const book = this.props.value;
    const books = this.props.books;
    let { title, authors } = book;

    authors = authors ? authors.join(", ") : "";

    const thumbnail = book.imageLinks
      ? book.imageLinks.smallThumbnail
      : "https://via.placeholder.com/128x196"; // TODO: Provide a decent placeholder

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url("${thumbnail}")`
            }}
          />
          <BookShelfChanger 
            selectedBook={book} 
            books={books}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}