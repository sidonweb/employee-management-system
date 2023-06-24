import React, { useState } from 'react';
import axios from 'axios';
import DataTable from './SearchedTable';

function SearchBar({ getData }) {
    const [query, setQuery] = useState('');
    const [queryData, setQueryData] = useState([]);

    function handleSearch(e) {
        e.preventDefault();
        getData(query);
    }



    function getData(query) {
        axios.get(`http://localhost:5000/api/data/${query}`, { params: { query } })
            .then(response => {
                setQueryData(response.data);
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <div className=' card search-card'>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search with employee ID"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className='btn btn-secondary' type="submit">Search</button>
            </form>
            <DataTable data={queryData} />
            
        </div>

    );
}


export default SearchBar;