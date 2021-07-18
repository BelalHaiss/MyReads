import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import BookState from './Context/myReadsState';

ReactDOM.render(
  <BookState>
    <App />
  </BookState>,
  document.getElementById('root')
);
