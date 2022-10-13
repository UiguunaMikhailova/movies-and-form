import React, { Component } from 'react';
import './home.css';
import { getData } from 'Requests/Requests';
import CardList from 'Components/CardList';
import Layout from 'Components/Layout/Layout';
import Search from 'Components/Search';

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
