import React, { Component } from 'react';
import './Search.css';
import { defaultValue, searchUrl } from 'Constants/Constants';
import { SearchProps } from 'types/types';

export default class Search extends Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
  }
  state = {
    value: localStorage.getItem('search') ?? defaultValue,
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
