import React from 'react';
import { Fragment } from 'react';

import Header from './components/Layout/Header';
import Products from './components/Products/Products';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <Products />
    </Fragment>
  );
};

export default App;
