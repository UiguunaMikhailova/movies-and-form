import React, { useContext, useEffect } from 'react';
import { Context } from 'App';
import { SearchProps } from 'types';
import { popularUrl, searchUrl } from 'Constants';
import './Search.css';

export default function Search({ searchCards }: SearchProps) {
  const context = useContext(Context);
  const { searchValue } = context.state;

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
        context.dispatch({ type: 'setCards', payload: { searchValue: e.target.value } });
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
        e.key === 'Enter' &&
        e.currentTarget.value.length &&
        searchCards(`${searchUrl}${e.currentTarget.value}`)
      }
    />
  );
}
