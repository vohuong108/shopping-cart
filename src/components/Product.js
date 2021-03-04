import React from 'react'

export default function Product({product, onAdd}) {
    return (
        <div className="product-item">
            <img className="small-img" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="">${product.price}</div>
            <div className="">
                <button className="btn" onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    )
}
