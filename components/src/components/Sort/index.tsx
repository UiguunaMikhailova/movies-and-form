import React, { useContext } from 'react';
import { Context } from 'App';
import { ACTIONTYPE, SearchProps } from 'types';
import { moviesCountArray, popularUrl, searchUrl } from 'Constants';
import './Sort.css';

export default function Sort({ searchCards }: SearchProps) {
  const context = useContext(Context);
  const { searchValue, page, sort, moviesCount } = context.state;

  function sortMovies(e: React.ChangeEvent<HTMLSelectElement>) {
    context.dispatch({
      type: ACTIONTYPE.SETCARDS,
      payload: { sort: e.currentTarget.value },
    });

    if (searchValue.length) {
      searchCards(`${searchUrl}${searchValue}`, page, e.currentTarget.value);
    } else {
      searchCards(`${popularUrl}`, page, e.currentTarget.value);
    }
  }

  function setMoviesCount(e: React.ChangeEvent<HTMLSelectElement>) {
    context.dispatch({
      type: ACTIONTYPE.SETCARDS,
      payload: { moviesCount: Number(e.currentTarget.value) },
    });

    if (searchValue.length) {
      searchCards(`${searchUrl}${searchValue}`, page, sort, Number(e.currentTarget.value));
    } else {
      searchCards(`${popularUrl}`, page, sort, Number(e.currentTarget.value));
    }
  }

  return (
    <div className="sort">
      <select
        className="sort__select"
        value={sort}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => sortMovies(e)}
      >
        <option value="default">Select sort</option>
        <optgroup label="Title">
          <option value="title-asc">In ascending</option>
          <option value="title-desc">In descending</option>
        </optgroup>
        <optgroup label="Raiting">
          <option value="average-asc">In ascending</option>
          <option value="average-desc">In descending</option>
        </optgroup>
        <optgroup label="Vote count">
          <option value="count-asc">In ascending</option>
          <option value="count-desc">In descending</option>
        </optgroup>
      </select>
      <span className="sort__text">Show on page: </span>
      <select
        className="sort__select"
        value={moviesCount}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMoviesCount(e)}
      >
        {moviesCountArray.map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
}
