import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

export default class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  render() {
    const bookshelfs = [{
      id: "currentlyReading", title: "Currently Reading" 
    }, { 
      id: "wantToRead", title: "Want to"
    }, {
      id: "read", title: "Read"
    }];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelfs.map(shelf => (
              <BookShelf
                key={shelf.id}
                title={shelf.title}
                books={this.props.books.filter(
                  book => book.shelf === shelf.id
                )}
                changeShelf={this.props.changeShelf}
              />
            ))}
          </div>
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
