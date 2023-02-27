import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  ButtonLabel,
  FormInput,
  SearchButton,
  SearchForm,
} from './SearchField.styled';

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
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchButton type="submit">
          <ButtonLabel>
            <ImSearch size="18px" />
          </ButtonLabel>
        </SearchButton>

        <FormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />
      </SearchForm>
    </>
  );
};

SearchField.propTypes = {
  onSubmit: PropTypes.func,
};
