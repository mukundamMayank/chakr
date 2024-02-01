import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, onSearch }) => {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
      <i className="fas fa-search"></i>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
