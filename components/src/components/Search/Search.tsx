import React, { Component } from 'react';
import './Search.css';

// const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

// const popularUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d5da78d3ffd7f7454f49e8eb45260f5`;
const searchUrl =
  'https://api.themoviedb.org/3/search/movie?api_key=0d5da78d3ffd7f7454f49e8eb45260f5&query=';

type SearchProps = {
  searchCards: (value: string) => void;
};

export default class Search extends Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
  }
  state = {
    value: localStorage.getItem('search') ?? 'jack',
  };
  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.value);
  }
  componentDidMount(): void {
    this.props.searchCards(`${searchUrl}${this.state.value}`);
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
          e.key === 'Enter' && this.props.searchCards(`${searchUrl}${e.currentTarget.value}`)
        }
      />
    );
  }
}
