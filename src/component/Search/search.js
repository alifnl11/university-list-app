import React, { useState } from 'react';
import 'boxicons';
import './styles.scss';
import axios from 'axios';

const Search = ({ setSearchTerm, loading, title }) => {
    if(loading) {
        return <h2>Loading..</h2>
    }

    return(
        <div className="container">
        {/* Heading */}
        <h2 className="heading" >{title}</h2>
        {/* Search Input */}
        <label className="search__label" htmlFor="search-input">
                <input 
                    type="text" 
                    id="search-input"
                    placeholder="Search..."
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                />
                <a className="search__icon">
                    <box-icon name='search-alt'></box-icon>
                </a>
        </label>
        </div>
    )
};

export default Search