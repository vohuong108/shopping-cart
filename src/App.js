import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import React, { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCart] = useState([]);
  
  const onAdd = (product) => {
    const res = cartItems.find(x => x.id === product.id);

    if(res) {
      setCart(
        cartItems.map(x => 
          x.id === res.id ? {id: res.id, amount: res.amount + 1, product: res.product} : x
        )
      );
    }
    else {
      setCart([...cartItems, {id: product.id, amount: 1, product: product}]);
    }

  }

  const onRemove = (product) => {
    const res = cartItems.find(x => x.id === product.id);

    if(res.amount === 1) {
      setCart(cartItems.filter(x => x.id !== res.id));
    }
    else {
      setCart(
        cartItems.map(x => x.id === res.id ? {id: res.id, amount: res.amount - 1, product: res.product} : x)
      )
    }
  }


  return (
    <div className="App">
      <Header countCart={cartItems.length} />
      <div className="row">
        <Main products={products} onAdd={onAdd} />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
      </div>
    </div>
  );
}

export default App;
