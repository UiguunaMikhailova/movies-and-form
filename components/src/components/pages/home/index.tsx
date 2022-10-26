import React, { useContext } from 'react';
import Layout from 'Components/Layout';
import Search from 'Components/Search';
import CardList from 'Components/CardList';
import { getData } from 'Requests';
import './home.css';
import { CardsContext } from 'App';

export default function Home() {
  const cardsContext = useContext(CardsContext);

  function searchCards(url: string) {
    cardsContext.dispatch({ type: 'setCards', payload: { cards: [], isLoading: false } });

    getData(url).then((data) => {
      if (data) {
        cardsContext.dispatch({ type: 'setCards', payload: { cards: data, isLoading: false } });
      } else {
        cardsContext.dispatch({ type: 'setCards', payload: { cards: [], isLoading: true } });
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
