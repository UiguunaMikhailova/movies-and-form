import React, { Component } from 'react';
import './Home.css';
import Layout from 'Components/Layout/Layout';
import Search from '../../Search/Search';
import CardList from 'Components/CardList/CardList';

// const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d5da78d3ffd7f7454f49e8eb45260f5`;

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="home">
          <Search />
          <CardList />
        </div>
      </Layout>
    );
  }
}
