import React, { useContext } from 'react';
import { Context } from 'App';
import Layout from 'Components/Layout';
import Search from 'Components/Search';
import CardList from 'Components/CardList';
import Pagination from 'Components/Pagination';
import Sort from 'Components/Sort';
import { getData } from 'Requests';
import { sortItems } from 'Helpers';
import './home.css';

export default function Home() {
  const context = useContext(Context);
  const { page, sort } = context.state;

  function searchCards(url: string, pageNumber = page, sortString = sort) {
    context.dispatch({
      type: 'setCards',
      payload: { movies: [], isLoading: true, page: pageNumber },
    });

    getData(`${url}&page=${pageNumber}`).then((data) => {
      if (data) {
        context.dispatch({
          type: 'setCards',
          payload: {
            movies: sortItems(sortString, data.results),
            isLoading: false,
            totalPages: data.total_pages,
          },
        });
      } else {
        context.dispatch({
          type: 'setCards',
          payload: { movies: [], isLoading: true },
        });
      }
    });
  }

  return (
    <Layout>
      <div className="home" role="homePage">
        <Search searchCards={searchCards} />
        <Sort searchCards={searchCards} />
        <CardList />
        <Pagination searchCards={searchCards} />
      </div>
    </Layout>
  );
}
