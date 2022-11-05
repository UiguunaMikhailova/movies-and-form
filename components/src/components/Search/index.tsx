import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { movieSlice } from 'store/reducers/MovieSlice';
import { SearchProps } from 'types';
import { popularUrl, searchUrl } from 'Constants';
import './Search.css';

export default function Search({ searchCards }: SearchProps) {
  const { searchValue } = useAppSelector((state) => state.MovieSlice);
  const dispatch = useAppDispatch();
  const { setSearchValue } = movieSlice.actions;

  useEffect(() => {
    if (searchValue.length) {
      searchCards(`${searchUrl}${searchValue}`);
    } else {
      searchCards(`${popularUrl}`);
    }
  }, []);

  return (
    <input
      className="input"
      type="search"
      role="search"
      placeholder="Search..."
      autoFocus
      value={searchValue}
      onChange={(e) => {
        dispatch(setSearchValue(e.target.value));
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
        e.key === 'Enter' &&
        e.currentTarget.value.length &&
        searchCards(`${searchUrl}${e.currentTarget.value}`)
      }
    />
  );
}
