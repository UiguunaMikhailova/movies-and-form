import React, { Component } from 'react';
import './Home.css';
import Layout from 'Components/Layout/Layout';
import Search from '../../Search/Search';
import CardList from 'Components/CardList/CardList';
import { getData } from 'Requests/Requests';

const popularUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d5da78d3ffd7f7454f49e8eb45260f5`;
const searchUrl =
  'https://api.themoviedb.org/3/search/movie?api_key=0d5da78d3ffd7f7454f49e8eb45260f5&query=';

export default class Home extends Component {
  state = {
    cards: [],
  };
  componentDidMount(): void {
    const url = localStorage.getItem('search')
      ? `${searchUrl}${localStorage.getItem('search')}`
      : popularUrl;
    getData(url).then((data) => {
      this.setState({ cards: data.results });
    });
  }
  searchCards(value: string) {
    getData(`${searchUrl}${value}`).then((data) => {
      this.setState({ cards: data.results });
    });
  }
  render() {
    return (
      <Layout>
        <div className="home">
          <Search searchCards={this.searchCards.bind(this)} />
          <CardList cards={this.state.cards} />
        </div>
      </Layout>
    );
  }
}
