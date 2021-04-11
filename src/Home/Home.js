import React from 'react';
import './Home.css'
import Product from "../Product/Product";


function Home(props) {
    return (
        <div className='home'>
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"

            />

            <div className="home__row">
                <Product
                    id={12}
                    title="Pizza How Constant"
                    price={2.93}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41PKoCwN-wL._AC_SY200_.jpg"
                />

                <Product
                    id={11}
                    title="Blander : How Constant"
                    price={34.3}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"


                />
            </div>
            <div className="home__row">
                <Product
                    id={10}
                    title="Toys"
                    price={3.45}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41-7l-po+EL._AC_SY200_.jpg"


                />
                <Product
                    id={9}
                    title="Wifi"
                    price={56}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/41ffko0T3kL._AC_SY200_.jpg"


                />
                <Product
                    id={8}
                    title="Game development"
                    price={1.03}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51NV8Uil7wL._AC_SY200_.jpg"


                />


            </div>
            <div className="home__row">
                <Product
                    id={7}
                    title="Hand Watch"
                    price={11.93}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"


                />
            </div>
        </div>
    );
}

export default Home;