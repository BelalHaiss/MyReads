import React from 'react';

const MyContext = React.createContext({
  loading: false,
  changeBookState: () => {},
  Books: []
});

export default MyContext;
