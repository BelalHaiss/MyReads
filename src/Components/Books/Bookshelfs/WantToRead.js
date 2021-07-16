import React from 'react';
import Spinner from '../../Spinner';

const WantToRead = ({ books, loading, theBookState }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Want to Read</h2>
      <div className='bookshelf-books'>
        {loading ? (
          <Spinner />
        ) : (
          <ol className='books-grid'>
            {books.map((book) => (
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
                        defaultValue='wantToRead'
                        onChange={(e) => theBookState(e, book)}
                      >
                        <option value='move' disabled>
                          Move to...
                        </option>
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
        )}
      </div>
    </div>
  );
};

export default WantToRead;
