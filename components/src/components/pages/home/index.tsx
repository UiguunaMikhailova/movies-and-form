import React, { useContext } from 'react';
import Layout from 'Components/Layout';
import Search from 'Components/Search';
import CardList from 'Components/CardList';
import Pagination from 'Components/Pagination';
import Sort from 'Components/Sort';
import { Context } from 'App';
import { getData } from 'Requests';
import { sortItems } from 'Helpers';
import { ACTIONTYPE } from 'types';
import './home.css';

export default function Home() {
  const context = useContext(Context);
  const { page, sort, moviesCount } = context.state;

  function searchCards(url: string, pageNumber = page, sortString = sort, count = moviesCount) {
    context.dispatch({
      type: ACTIONTYPE.SETCARDS,
      payload: { movies: [], isLoading: true, page: pageNumber },
    });

    getData(`${url}&page=${pageNumber}`).then((data) => {
      if (data) {
        const cutMovies = data.results.slice(0, count);
        context.dispatch({
          type: ACTIONTYPE.SETCARDS,
          payload: {
            movies: sortItems(sortString, cutMovies),
            isLoading: false,
            totalPages: data.total_pages,
          },
        });
      } else {
        context.dispatch({
          type: ACTIONTYPE.SETCARDS,
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
