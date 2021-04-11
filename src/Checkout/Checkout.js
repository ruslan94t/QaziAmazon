import React from 'react';
import './Checkout.css';
import {useStateValue} from "../redux/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";







function Checkout(props) {

    const [{basket}] = useStateValue();
    return (
        <div className='checkout'>
            <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
            />

            {basket?.length===0?(
                <div className="checkout__empty">
                    <h2>
                        Your Shopping Basket is empty
                    </h2>
                    <p>
                        You have no items in your basket .
                        To buy one or "Add to basket" next to them it.
                    </p>
                </div>
            ):(
                <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>

            {/*List Out all of the Checkout Products*/}
            {
                basket?.map(item=>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
                ))
            }

                </div>
            )}


        </div>
    );
}

export default Checkout;

