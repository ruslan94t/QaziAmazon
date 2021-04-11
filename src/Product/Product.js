import React from 'react';
import './Product.css'


function Product({id, title, price, rating, image}) {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>&</small>
                    <span>
                    {price}
                </span>
                </p>

                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>&#9733;</p>
                            ))
                    }
                </div>
            </div>
            <img src={image}/>
            <button>Add Bascket</button>


        </div>
    );
}

export default Product;
