import React, { useContext } from 'react';
import { Context } from 'App';
import { SearchProps } from 'types';
import { popularUrl, searchUrl } from 'Constants';
import './Sort.css';

export default function Sort({ searchCards }: SearchProps) {
  const context = useContext(Context);
  const { searchValue, page, sort } = context.state;

  function sortMovies(e: React.ChangeEvent<HTMLSelectElement>) {
    context.dispatch({
      type: 'setCards',
      payload: { sort: e.currentTarget.value },
    });
    if (searchValue.length) {
      searchCards(`${searchUrl}${searchValue}`, page, e.currentTarget.value);
    } else {
      searchCards(`${popularUrl}`, page, e.currentTarget.value);
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
        <optgroup label="Vote average">
          <option value="average-asc">In ascending</option>
          <option value="average-desc">In descending</option>
        </optgroup>
        <optgroup label="Vote count">
          <option value="count-asc">In ascending</option>
          <option value="count-desc">In descending</option>
        </optgroup>
      </select>
    </div>
  );
}
