import React, { Component } from 'react'
import { getData } from 'Requests/Requests'

const apiKey = '0d5da78d3ffd7f7454f49e8eb45260f5';
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

type Card = {
    title: string
}

export default class CardList extends Component {
  state = {
    cards: []
  }
  componentDidMount(): void {
      getData(url).then((data) => {
        this.setState({ cards: data.results })
      })
  }
  render() {
    return (
      <div>
        <ul>
            {this.state.cards.map((item: Card, index) => {
                return (
                   <li key={index}>{item.title}</li>
                )
            })}
        </ul>
      </div>
    )
  }
}
