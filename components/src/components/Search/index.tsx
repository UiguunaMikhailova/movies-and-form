import React, { useContext, useEffect } from 'react';
import { SearchProps } from 'types';
import { popularUrl, searchUrl } from 'Constants';
import './Search.css';
import { CardsContext } from 'App';

export default function Search({ searchCards }: SearchProps) {
  const cardsContext = useContext(CardsContext);
  const { searchValue } = cardsContext.state;
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
        cardsContext.dispatch({ type: 'setCards', payload: { searchValue: e.target.value } });
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
        e.key === 'Enter' &&
        e.currentTarget.value.length &&
        searchCards(`${searchUrl}${e.currentTarget.value}`)
      }
    />
  );
}
