import React, { useContext } from 'react';
import Layout from 'Components/Layout';
import Search from 'Components/Search';
import CardList from 'Components/CardList';
import { getData } from 'Requests';
import { Context } from 'App';
import './home.css';
import Pagination from 'Components/Pagination';

export default function Home() {
  const context = useContext(Context);
  const currPage = context.state.page;

  function searchCards(url: string, pageNumber = currPage) {
    context.dispatch({
      type: 'setCards',
      payload: { movies: [], isLoading: true, page: pageNumber },
    });

    getData(`${url}&page=${pageNumber}`).then((data) => {
      if (data) {
        context.dispatch({
          type: 'setCards',
          payload: { movies: data.results, isLoading: false, totalPages: data.total_pages },
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
        <CardList />
        <Pagination searchCards={searchCards} />
      </div>
    </Layout>
  );
}
