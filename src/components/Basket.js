import React from 'react';

const Basket = ({ cartItems, onAdd, onRemove }) => {
    const itemsPrice = cartItems.reduce((acc, cur) => acc + cur.product.price * cur.amount, 0);
    const taxPrice = itemsPrice * 0.1;
    const shippingPrice = itemsPrice > 2000 ? 0 : 35;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            { cartItems.map((item) => (
              <div className="row space">
                <div className="col-2">{item.product.name}</div>
                  <div className="col-2">
                    <button className="btn-decrease" onClick={() => onAdd(item.product)}>+</button>
                        {' '}
                    <button className="btn-increase" onClick={() => onRemove(item.product)}>-</button>
                  </div>
                <div className="col-2 text-right">{`${item.amount} x $${item.product.price}`}</div>
              </div>
            ))}
            {cartItems.length !==0 && (
                <>
                    <hr />
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-2 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax Price</div>
                        <div className="col-2 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-2 text-right">${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <strong>Total Price</strong> 
                        </div>
                        <div className="col-2 text-right">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <button className="btn">
                            Checkout
                        </button>
                    </div>
                </>
            )}
    
        </aside>
    )
}

export default Basket;