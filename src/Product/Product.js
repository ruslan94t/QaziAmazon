import React from 'react';
import './Product.css'
import {useStateValue} from "../redux/StateProvider";


function Product({id, title, price, rating, image}) {

    const [{basket}, dispatch] = useStateValue();
    const addToBasket = ()=>{
//add item to basket ...
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id,
                title,
                price,
                rating,
                image
            }
        })
    };

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
            <button onClick={addToBasket}>Add Bascket</button>


        </div>
    );
}

export default Product;
