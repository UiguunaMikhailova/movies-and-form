import React, { useEffect, useState } from 'react';
import './Search.css';
import { defaultValue, searchUrl } from 'Constants/Constants';
import { SearchProps } from 'types/types';

export default function Search({ searchCards }: SearchProps) {
  const [value, setValue] = useState(localStorage.getItem('search') ?? defaultValue);
  useEffect(() => {
    searchCards(`${searchUrl}${value}`);
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
        e.key === 'Enter' && searchCards(`${searchUrl}${e.currentTarget.value}`)
      }
    />
  );
}
