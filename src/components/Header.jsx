import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Header = () => {
  const [query, setQuery] = useState('');
  const { fetchMovie } = useContext(MovieContext);

  const handleClick = () => {
    if (query.trim() === '') {
      alert('Enter movie title!');
      return;
    }
    fetchMovie(query);
  };

  return (
    <header className="header">
      <h1>Movie searcher</h1>
      <div className="clickable">
        <input
          type="text"
          className="search-input"
          placeholder="Enter movie title (For example: Blade Runner)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
