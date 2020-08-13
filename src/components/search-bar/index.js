import React from 'react';
import './index.css';

function SearchBar(props) {
    const { onSearch } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        typeof onSearch === 'function' && onSearch();
    }

    return (
        <form onSubmit={onSubmit} className={'search-bar'}>
            <label htmlFor="search-photo-keyword">Search Photos </label>
            <input type="text" name="search-photo-keyword" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default SearchBar;