import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrentlyReading from './Bookshelfs/CurrentlyReading';
import WantToRead from './Bookshelfs/WantToRead.js';
import Read from './Bookshelfs/Read.js';

export default class Books extends Component {
  render() {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>

        <div className='list-books-content'>
          <div>
            <CurrentlyReading />
            <WantToRead />
            <Read />
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
