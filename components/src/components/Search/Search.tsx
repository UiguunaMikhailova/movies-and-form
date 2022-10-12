import React, { Component } from 'react'

export default class Search extends Component {
  state = {
    value: localStorage.getItem('search') ?? ''
  }
  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.value)
  }
  render() {
    return (
      <div>
        <input type="search" role='search' placeholder='search' value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} 
        />
      </div>
    )
  }
}
