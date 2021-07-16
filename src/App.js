import React from 'react';
import './App.css';
import SearchBar from './Components/Search';
import * as BooksAPI from './BooksAPI';

import Books from './Components/Books/Books';
import { BrowserRouter, Route } from 'react-router-dom';
class BooksApp extends React.Component {
  state = {
    loading: false,
    Books: []
  };

  shouldComponentUpdate(re) {
    return true;
  }
  async componentDidMount() {
    this.setState({ loading: true });
    const All = await BooksAPI.getAll();

    this.setState({ Books: [...All], loading: false });
  }
  theBookState = async (e, book) => {
    const bookStateValue = e.target.value;
    if (
      bookStateValue === 'wantToRead' ||
      bookStateValue === 'read' ||
      bookStateValue === 'none' ||
      bookStateValue === 'currentlyReading'
    ) {
      const updatedBook = await BooksAPI.update(book, bookStateValue);
      const All = await BooksAPI.getAll();

      this.setState({ Books: [...All], loading: false });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route
            exact
            path='/'
            render={(props) => (
              <Books theBookState={this.theBookState} books={this.state} />
            )}
          />

          <Route
            path='/search'
            render={(props) => {
              return (
                <SearchBar
                  allBooks={this.state.Books}
                  theBookState={this.theBookState}
                />
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
