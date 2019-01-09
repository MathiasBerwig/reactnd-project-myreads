import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url("${this.props.value.imageLinks.smallThumbnail}")`
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.value.title}</div>
        <div className="book-authors">{this.props.value.authors.join(", ")}</div>
      </div>
    );
  }
}

Book.propTypes = {
  value: PropTypes.object.isRequired,
};

export default Book;
