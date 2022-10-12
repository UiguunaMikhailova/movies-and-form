import React, { Component } from 'react';
import './Search.css';

// const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

type SearchProps = {
  searchCards: (value: string) => void;
};

export default class Search extends Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
  }
  state = {
    value: localStorage.getItem('search') ?? '',
  };
  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.value);
  }
  render() {
    return (
      <input
        className="input"
        type="search"
        role="search"
        placeholder="Search..."
        autoFocus
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          e.key === 'Enter' && this.props.searchCards(this.state.value)
        }
      />
    );
  }
}
