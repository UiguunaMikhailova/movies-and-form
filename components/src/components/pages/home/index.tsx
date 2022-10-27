import React, { useContext } from 'react';
import Layout from 'Components/Layout';
import Search from 'Components/Search';
import CardList from 'Components/CardList';
import { getData } from 'Requests';
import { Context } from 'App';
import './home.css';

export default function Home() {
  const context = useContext(Context);

  function searchCards(url: string) {
    context.dispatch({ type: 'setCards', payload: { movies: [], isLoading: true } });

    getData(url).then((data) => {
      if (data) {
        context.dispatch({ type: 'setCards', payload: { movies: data, isLoading: false } });
      } else {
        context.dispatch({ type: 'setCards', payload: { movies: [], isLoading: true } });
      }
    });
  }

  return (
    <Layout>
      <div className="home" role="homePage">
        <Search searchCards={searchCards} />
        <CardList />
      </div>
    </Layout>
  );
}
