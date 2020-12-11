import React, { useState } from 'react';
import 'boxicons';
import './styles.scss';
import axios from 'axios';

// class Search extends React.Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             query: '',
//             results: {},
//             loading: false,
//             message: ''
//         }
//     }

//     handleOnInputChange = ( event ) => {
//         const query = event.target.value;
//         this.setState( { query: query, loading: true , message: ''} );
//     };

//     render () {
//         const { query } = this.state;

//         return(
//             <div className="container">
//             {/* Heading */}
//             <h2 className="heading">University Search: React Application</h2>
//             {/* Search Input */}
//             <label className="search__label" htmlFor="search-input">
//                     <input 
//                         type="text" 
//                         value={query}
//                         id="search-input"
//                         placeholder="Search..."
//                         onChange={this.handleOnInputChange}
//                     />
//                     <a className="search__icon">
//                         <box-icon name='search-alt'></box-icon>
//                     </a>
//             </label>
//             </div>
//         )
//     }
// }

// export default Search
const Search = ({ setSearchTerm, loading }) => {
    if(loading) {
        return <h2>Loading..</h2>
    }

    return(
        <div className="container">
        {/* Heading */}
        <h2 className="heading">University Search: React Application</h2>
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