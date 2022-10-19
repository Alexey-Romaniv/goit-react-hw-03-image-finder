import React, { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import fetchImages from 'services/rest-api';
const axios = require('axios').default;

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    isModalOpen: false,
    largeImageId: null,
    largeImage: [],
  };

  componentDidUpdate() {
    this.setState(prevState => {
      if (
        prevState.query !== this.state.query ||
        prevState.page !== this.state.page
      ) {
        this.searchImg(this.state.query, this.state);
      }
    });
  }
  searchImg = (query, page) => {
    fetchImages(query, page);
  };
  onSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  render() {
    return <SearchBar onSubmit={this.searchImg} />;
  }
}
