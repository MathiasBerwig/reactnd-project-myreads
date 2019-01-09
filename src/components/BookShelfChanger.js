import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BookShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  }
  
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value={this.props.book.shelf} disabled>
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