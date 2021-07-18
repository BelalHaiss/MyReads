import React from 'react';
import './App.css';
import SearchBar from './Components/Search';

import MyContext from './Context/MyContext';

import Books from './Components/Books/Books';
import { BrowserRouter, Route } from 'react-router-dom';
class BooksApp extends React.Component {
  state = {
    loading: false,
    Books: []
  };
  static contextType = MyContext;

  async componentDidMount() {
    this.context.getAllBooks();
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact path='/' render={(props) => <Books />} />

          <Route
            path='/search'
            render={(props) => {
              return <SearchBar />;
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
