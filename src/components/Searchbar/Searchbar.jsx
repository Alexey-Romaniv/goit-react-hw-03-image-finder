import s from '../../styles.css';
import React, { Component } from 'react';

const axios = require('axios').default;

export class SearchBar extends Component {
  state = {
    query: '',
  };
  handleSearchInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('Enter image category name');
      // Заменить потом
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={e => this.handleSubmit(e)}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            name="query"
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={this.handleSearchInput}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}
