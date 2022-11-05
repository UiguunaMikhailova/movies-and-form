import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { movieSlice } from 'store/reducers/MovieSlice';
import { moviesCountArray } from 'Constants';
import './Sort.css';

export default function Sort() {
  const { sort, moviesCount } = useAppSelector((state) => state.MovieSlice);
  const dispatch = useAppDispatch();
  const { setSortValue, setCountValue } = movieSlice.actions;

  return (
    <div className="sort">
      <select
        className="sort__select"
        value={sort}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(setSortValue(e.currentTarget.value))
        }
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
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(setCountValue(Number(e.currentTarget.value)))
        }
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
