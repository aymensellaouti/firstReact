import React from 'react';
import './input-search.css';
const InputSearch = (props) => {
    return (
        <div className='input-container'>
            <input
              onChange={ props.updateSearchField}
              onClick= {e => props.tester(e)}
              type='search'
              placeholder='Enter the name of the user you look for'/>
        </div>
    ); 

export default InputSearch;
