import React from 'react';

// components
import Customer from './Customer';

const Container = () => {
  return (
    <div className="container">
      <h1>Make A Selection</h1>
      <div className="components">
        <Customer />
      </div>
    </div>
  );
};

export default Container;