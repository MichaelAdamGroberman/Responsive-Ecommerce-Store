import React, { useState } from 'react';
import ProductList from '../components/product-List';
import CategoryMenu from '../components/category-Menu';
import Cart from '../components/Cart';
const Home = () => {
  return (
    <div className='container'>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
