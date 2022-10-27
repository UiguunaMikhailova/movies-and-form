import React, { useContext } from 'react';
import { Context } from 'App';
import './Pagination.css';
import { SearchProps } from 'types';
import { popularUrl, searchUrl } from 'Constants';

export default function Pagination({ searchCards }: SearchProps) {
  const context = useContext(Context);

  const { searchValue } = context.state;
  const currPage = context.state.page;

  function nextPage() {
    context.dispatch({ type: 'setCards', payload: { page: currPage + 1 } });
    if (searchValue.length) {
      searchCards(`${searchUrl}${searchValue}`, currPage + 1);
    } else {
      searchCards(`${popularUrl}`, currPage + 1);
    }
  }

  function prevPage() {
    context.dispatch({ type: 'setCards', payload: { page: currPage - 1 } });
    if (searchValue.length) {
      searchCards(`${searchUrl}${searchValue}`, currPage - 1);
    } else {
      searchCards(`${popularUrl}`, currPage - 1);
    }
  }

  return (
    <div className="pagination">
      <button className="pagination__btn" onClick={prevPage} disabled={currPage <= 1}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </button>
      <h3 className="curr-page">{currPage}</h3>
      <button className="pagination__btn" onClick={nextPage} disabled={currPage >= 10}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </button>
    </div>
  );
}
