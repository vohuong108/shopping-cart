import React from 'react';

const Header = ({ countCart }) => {
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    Cart {' '}
                    { countCart !== 0 && (<button className="btn btn-cart">{countCart}</button>)}
                </a>
                 <a href="#/Sign-in"> Sign In </a>
            </div>
        </header>
        
    )
}

export default Header;