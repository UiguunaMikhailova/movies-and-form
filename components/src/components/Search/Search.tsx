import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
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
      />
    );
  }
}
