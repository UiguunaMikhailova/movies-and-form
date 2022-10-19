import React, { Component } from 'react';
import './home.css';
import Layout from 'Components/Layout/Layout';
import Search from '../../Search';
import CardList from 'Components/CardList';
import { getData } from 'Requests/Requests';

export default class Home extends Component {
  state = {
    cards: [],
    isLoading: false,
  };
  searchCards(url: string) {
    this.setState({ isLoading: true, cards: [] });

    getData(url).then((data) => {
      if (data) {
        this.setState({ cards: data, isLoading: false });
      } else {
        this.setState({ cards: [], isLoading: false });
      }
    });
  }
  render() {
    return (
      <Layout>
        <div className="home" role="homePage">
          <Search searchCards={this.searchCards.bind(this)} />
          <CardList cards={this.state.cards} isLoading={this.state.isLoading} />
        </div>
      </Layout>
    );
  }
}
