import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import * as BooksAPI from '../api/BooksAPI';
import Book from './Book';

export default class SearchBar extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  
  state = {
    hasError: false,
    results: [],
    query: ''
  }

  doSearch = (query) => {
    if (query) {
      BooksAPI.search(query.trim())
        .then(books => {
          books.length > 0
            ? this.setState({ hasError: false, results: books })
            : this.setState({ hasError: true, results: [] })
        });
    } else {
      this.setState({ hasError: false, results: [] })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput 
              minLength={2}
              debounceTimeout={300}
              onChange={event => this.doSearch(event.target.value)} 
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.results.map(book => (
            <li key={book.id}>
              <Book value={book} books={this.props.books} />
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}
