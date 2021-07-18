import React, { useContext } from 'react';
import Spinner from '../../Spinner';
import MyContext from '../../../Context/MyContext';

const WantToRead = () => {
  const bookContext = useContext(MyContext);
  const wantToReadBooks = bookContext.Books.filter(
    (book) => book.shelf === 'wantToRead'
  );
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Want to Read</h2>
      <div className='bookshelf-books'>
        {bookContext.loading ? (
          <Spinner />
        ) : (
          <ol className='books-grid'>
            {wantToReadBooks.map((book) => (
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
                        onChange={(e) => bookContext.changeBookState(e, book)}
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

export default React.memo(WantToRead);
