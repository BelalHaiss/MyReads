import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '.././BooksAPI';
import MyContext from '../Context/MyContext';
const SearchBar = () => {
  const bookContext = useContext(MyContext);
  const findWithId = (id) => {
    const found = bookContext.Books.find((book) => book.id === id);
    return found ? found.shelf : 'none';
  };
  const [search, setSearch] = useState('');
  const [books, setBook] = useState([]);
  const inputValue = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  useEffect(
    async () => {
      if (search) {
        const foundedBook = await BooksAPI.search(search);
        if (foundedBook && !foundedBook.error) {
          setBook([...foundedBook]);
        } else {
          setBook('');
        }
      } else {
        setBook('');
      }
    },
    [search]
  );

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/'>
          <button className='close-search'>Close</button>
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            onChange={inputValue}
            placeholder='Search by title or author'
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {books.length > 1 &&
            books.map((book, i) => (
              <li key={book.id}>
                <div className='book'>
                  <div className='book-top'>
                    <div
                      className='book-cover'
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks ? book.imageLinks.thumbnail : ''
                        })`
                      }}
                    />
                    <div className='book-shelf-changer'>
                      <select
                        defaultValue={findWithId(book.id)}
                        onChange={(e) => bookContext.changeBookState(e, book)}
                      >
                        <option value='move'>Move to...</option>
                        <option value='currentlyReading'>
                          Currently Reading
                        </option>
                        <option value='wantToRead'>Want to Read</option>
                        <option value='read'>Read</option>
                        <option value='none'>None</option>
                      </select>
                    </div>
                  </div>
                  <div className='book-title'>{book.title}</div>
                  <div className='book-authors'>{book.authors}</div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBar;
