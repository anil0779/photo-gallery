import React, { useState } from 'react';
import './index.css';

function SearchBar(props) {
    const { onSearch } = props;

    const [keyword , setKeyword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        typeof onSearch === 'function' && keyword && onSearch(keyword);
    }

    const updateKeyword = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className={'search-bar'}>
            <label htmlFor="search-photo-keyword">Search Photos </label>
            <input type="text" name="search-photo-keyword" onChange={updateKeyword}/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default SearchBar;