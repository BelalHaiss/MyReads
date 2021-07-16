import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrentlyReading from './Bookshelfs/CurrentlyReading';
import WantToRead from './Bookshelfs/WantToRead.js';
import Read from './Bookshelfs/Read.js';

export default class Books extends Component {
  state = {
    curntReading: [],
    read: [],
    wantToRead: []
  };
  static getDerivedStateFromProps(props, state) {
    if (!props.books.loading) {
      const allBooks = props.books.Books;
      const curntReading = allBooks.filter(
        (book) => book.shelf === 'currentlyReading'
      );
      const read = allBooks.filter((book) => book.shelf === 'read');
      const wantToRead = allBooks.filter((book) => book.shelf === 'wantToRead');

      state = {
        curntReading,
        read,
        wantToRead
      };
    }
    return state;
  }

  render() {
    const {
      books: { loading },
      theBookState
    } = this.props;
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>

        <div className='list-books-content'>
          <div>
            {' '}
            <CurrentlyReading
              books={this.state.curntReading}
              loading={loading}
              theBookState={theBookState}
            />
            <WantToRead
              theBookState={theBookState}
              books={this.state.wantToRead}
              loading={loading}
            />
            <Read
              theBookState={theBookState}
              books={this.state.read}
              loading={loading}
            />
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
