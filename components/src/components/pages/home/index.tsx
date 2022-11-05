import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchData } from 'store/reducers/ActionCreators';
import Layout from 'Components/Layout';
import Search from 'Components/Search';
import CardList from 'Components/CardList';
import Pagination from 'Components/Pagination';
import Sort from 'Components/Sort';
import './home.css';

export default function Home() {
  const { page } = useAppSelector((state) => state.MovieSlice);
  const dispatch = useAppDispatch();

  function searchCards(url: string, pageNumber = page) {
    dispatch(fetchData(`${url}&page=${pageNumber}`));
  }

  return (
    <Layout>
      <div className="home" role="homePage">
        <Search searchCards={searchCards} />
        <Sort />
        <CardList />
        <Pagination searchCards={searchCards} />
      </div>
    </Layout>
  );
}
