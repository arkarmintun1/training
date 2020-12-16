import React, { useState } from 'react';

const SearchForm = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleTextChange = (e) => setSearchText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchText);
    e.currentTarget.reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">
        Search
      </label>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        onChange={handleTextChange}
      />
      <button type="submit" id="submit" className="search-button">
        <i className="material-icons icn-search">search</i>
      </button>
    </form>
  );
};

export default SearchForm;
