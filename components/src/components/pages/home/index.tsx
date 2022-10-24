import React, { useState } from 'react';
import Layout from 'Components/Layout';
import Search from 'Components/Search';
import CardList from 'Components/CardList';
import { getData } from 'Requests';
import './home.css';

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
