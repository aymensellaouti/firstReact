import React from 'react';
import './input-search.css';
const InputSearch = (props) => {
    return (
        <div className='center-div'>
            <input
              className='input-container'
              onChange={ props.updateSearchField} 
              onClick= {e => props.tester(e)}
              type='search'
              placeholder='enter the name of the user you look for'/>
        </div>
    );
};

export default InputSearch;