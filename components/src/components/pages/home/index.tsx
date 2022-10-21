import React, { useState } from 'react';
import './home.css';
import Layout from 'Components/Layout/Layout';
import Search from '../../Search';
import CardList from 'Components/CardList';
import { getData } from 'Requests/Requests';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function searchCards(url: string) {
    setIsLoading(true);
    setCards([]);

    getData(url).then((data) => {
      if (data) {
        setCards(data);
        setIsLoading(false);
      } else {
        setIsLoading(true);
        setCards([]);
      }
    });
  }

  return (
    <Layout>
      <div className="home" role="homePage">
        <Search searchCards={searchCards} />
        <CardList cards={cards} isLoading={isLoading} />
      </div>
    </Layout>
  );
}
