import React from 'react';
import './App.css';
import ReviewItems from './components/Reviews';
import { ProductInfo, PhotoProduct } from './components/ProductInfo';

function App() {
  return (
    <div className="Parentbox">
      <PhotoProduct />
      <ProductInfo isDiscount="yes" name="Pinky Swag" category="SNEAKERS" />
      <ReviewItems />
    </div>
  );
}








export default App;
