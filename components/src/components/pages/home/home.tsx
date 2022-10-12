import React, { Component } from "react";
import "./Home.css";
import Layout from "Components/Layout/Layout";
import Search from "../../Search/Search";
import CardList from "Components/CardList/CardList";

const apiKey = "0d5da78d3ffd7f7454f49e8eb45260f5";
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

export default class Home extends Component {
  async getData() {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  }
  render() {
    return (
      <Layout>
        <div className="home">
          <div>Home</div>
          <Search />
          <CardList />
        </div>
      </Layout>
    );
  }
}
