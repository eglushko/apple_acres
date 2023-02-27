import React from 'react';
import { Fragment, useState } from 'react';

import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header';
import Products from './components/Products/Products';

import './App.css';

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCardHandler = () => {
    setCartIsOpen(true);
  }

  const closeCardHandler = () => {
    setCartIsOpen(false);
  }

  return (
    <Fragment>
      {cartIsOpen && <Cart onClose={closeCardHandler} />}
      <Header onOpenCard={openCardHandler}></Header>
      <Products />
    </Fragment>
  );
};

export default App;
