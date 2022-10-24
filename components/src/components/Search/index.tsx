import React, { useEffect, useState } from 'react';
import './Search.css';
import { popularUrl, searchUrl } from 'Constants/Constants';
import { SearchProps } from 'types/types';

export default function Search({ searchCards }: SearchProps) {
  const [value, setValue] = useState(localStorage.getItem('search') ?? '');
  useEffect(() => {
    if (value.length) {
      searchCards(`${searchUrl}${value}`);
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
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        localStorage.setItem('search', e.target.value);
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
        e.key === 'Enter' &&
        e.currentTarget.value.length &&
        searchCards(`${searchUrl}${e.currentTarget.value}`)
      }
    />
  );
}
