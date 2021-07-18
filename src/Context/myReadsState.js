import React, { useReducer } from 'react';
import * as BooksAPI from '../BooksAPI';
import reducer from './reducer';
import MyContext from './MyContext';
const BookState = (props) => {
  const initialState = {
    Books: [],
    loading: false
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllBooks = async () => {
    setLoading();
    const All = await BooksAPI.getAll();

    dispatch({ type: 'getBooks', data: All });
  };

  const changeBookState = async (e, book) => {
    const bookStateValue = e.target.value;
    setLoading();

    if (
      bookStateValue === 'wantToRead' ||
      bookStateValue === 'read' ||
      bookStateValue === 'none' ||
      bookStateValue === 'currentlyReading'
    ) {
      await BooksAPI.update(book, bookStateValue);
      getAllBooks();
    }
  };
  const setLoading = () => dispatch({ type: 'setLoading' });
  return (
    <MyContext.Provider
      value={{
        Books: state.Books,
        loading: state.loading,
        changeBookState: changeBookState,
        getAllBooks: getAllBooks
      }}
    >
      {props.children};
    </MyContext.Provider>
  );
};

export default BookState;
