import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "../redux/StateProvider";


function Header(props) {


    const [{basket}] = useStateValue();
    return (
        <nav className='header'>
            <Link to='/'>
                <img
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"

                />
            </Link>
            <div className="header__search">
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">
                            Hello Ruslan
                        </span>
                        <span className="header__optionsLineTwo">
                            Sing in
                            </span>
                    </div>
                </Link>
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">
                            Returns
                        </span>
                        <span className="header__optionsLineTwo">
                            &Orders
                            </span>
                    </div>
                </Link>
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">
                            Your
                        </span>
                        <span className="header__optionsLineTwo">
                            Prime
                            </span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__basketSpace ">
                       <ShoppingBasketIcon className="header__basket" />
                       <span className="header__optionsLineTwo header__basketCount">
                           {basket?.length}
                       </span>
                    </div>
                </Link>
            </div>





        </nav>

    );
}

export default Header;