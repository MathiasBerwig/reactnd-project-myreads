import React, { Component } from 'react';
import { withRenderCtrl } from 'react-render-ctrl';
import PropTypes from 'prop-types';

import Book from './Book';
import LoadingPlaceholder from './LoadingPlaceholder';

class SearchResults extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="search-books-results">
          <ol className="books-grid">
          {this.props.books.map(book => (
            <li key={book.id}>
              <Book 
                value={book} 
                books={this.props.books} 
                changeShelf={this.props.changeShelf}
                isLoading={this.props.isLoading}
                isDataReady={this.props.isDataReady }
              />
            </li>
          ))}
          </ol>
        </div>
    )
  }
}

export default withRenderCtrl(SearchResults, {
  EmptyComponent: () => <div></div>,
  LoadingComponent: () => <LoadingPlaceholder />,
});