import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import * as BooksAPI from '../api/BooksAPI';
import SearchResults from './SearchResults';

export default class SearchBar extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }
  
  state = {
    isLoading: false,
    hasError: false,
    results: []
  }

  doSearch = (query) => {
    if (query) {
      this.setState({isLoading: true})

      BooksAPI.search(query.trim())
        .then(books => {
          books.length > 0
            ? this.setState({ isLoading: false, hasError: false, results: books })
            : this.setState({ isLoading: false, hasError: true, results: [] })
        });
    } else {
      this.setState({ isLoading: false, hasError: false, results: [] })
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
        <SearchResults 
          books={ this.state.results }
          changeShelf={ this.props.changeShelf }
          isError={ this.state.hasError }
          isLoading={ this.state.isLoading }
          isDataReady={ this.state.results.length > 0 }
        />
      </div>
    )
  }
}
