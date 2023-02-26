import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';

export const SearchField = props => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    props.onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <button type="submit">
          <label>
            <ImSearch size="14px" />
          </label>
        </button>

        <input
          type="text"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

SearchField.propTypes = {
  onSubmit: PropTypes.func,
};
