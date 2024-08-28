import React from 'react';
import './searchBar.component.scss';

const SearchBar = ({ searchKey, handleSearchChange, searchMovies }) => {
    return (
        <form className="search-bar container mb-4" onSubmit={searchMovies}>
            <input
                type="text"
                className="search-bar__input"
                placeholder="Buscar"
                value={searchKey}
                onChange={handleSearchChange} // Usar la nueva función de cambio
            />
            <button className="search-bar__button btn btn-primary">Buscar</button>
        </form>
    );
};

export default SearchBar;