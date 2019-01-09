import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BookShelfChanger extends Component {
  static propTypes = {
    selectedBook: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
  }
  
  render() {
    const selectedBook = this.props.selectedBook;
    const books = this.props.books;

    let defaultShelf = selectedBook.shelf;

    // book was passed by Search component
    if (!defaultShelf) {
      // get more details from book, if it's already in our list
      const bookWithShelf = books.find(book => book.id === selectedBook.id);
      
      defaultShelf = bookWithShelf
        ? bookWithShelf.shelf
        : 'none'
    }

    return (
      <div className="book-shelf-changer">
        <select defaultValue={defaultShelf}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}