import React from 'react';
import spinner from '../layout/spinner.gif';
const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt=''
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default Spinner;
