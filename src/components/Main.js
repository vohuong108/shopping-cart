import React from 'react';
import Product from './Product';

const Main = ({ products, onAdd }) => {

    return (
        <main className="block col-2">
            <h2>Products</h2>
            <div className="main">
              { products.map(x => <Product key={x.id} product={x} onAdd={onAdd}/>) }
            </div>

        </main>
    )
}

export default Main;