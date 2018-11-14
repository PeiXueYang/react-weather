import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
         <div className='search-wrap'>
           <img  src={require('../../images/search.png')}  className='search-search' alt='img' />
           <input placeholder='查询其他城市' className='search-input'  />
         </div>
      </div>
    );
  }
}

export default Search;