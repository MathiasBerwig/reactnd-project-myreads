import React, { Component } from 'react';
import { withRenderCtrl } from 'react-render-ctrl';
import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";
import LoadingPlaceholder from './LoadingPlaceholder';

class BookShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }
  
  render() {
    const bookshelves = [{
      id: "currentlyReading", title: "Currently Reading" 
    }, { 
      id: "wantToRead", title: "Want to"
    }, {
      id: "read", title: "Read"
    }];

    return (
      <div>
        {bookshelves.map(shelf => (
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
    )
  }
}

export default withRenderCtrl(BookShelves, {
  LoadingComponent: () => <LoadingPlaceholder />
});