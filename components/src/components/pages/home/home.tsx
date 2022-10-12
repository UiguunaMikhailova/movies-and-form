import React, { Component } from 'react';
import './Home.css';
import Layout from 'Components/Layout/Layout';
import Search from '../../Search/Search';
import CardList from 'Components/CardList/CardList';
import { getData } from 'Requests/Requests';

export default class Home extends Component {
  state = {
    cards: [],
    isLoading: false,
  };
  searchCards(url: string) {
    this.setState({ isLoading: true, cards: [] });

    getData(url).then((data) => {
      this.setState({ cards: data.results, isLoading: false });
    });
  }
  render() {
    return (
      <Layout>
        <div className="home">
          <Search searchCards={this.searchCards.bind(this)} />
          <CardList cards={this.state.cards} isLoading={this.state.isLoading} />
        </div>
      </Layout>
    );
  }
}
