import { Fragment } from 'react';

import fruitImage from '../../assets/fruit.jpeg'
import cartIcon from '../../assets/shopping-cart-icon-48.png'
import classes from './Header.module.css'


const Header = (props) => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>🍎 Sweet Apple Acres</h1>
                <button className={classes.button} onClick={props.onOpenCard}>
                    <span className={classes.icon}><img src={cartIcon} alt="Cart" /></span>
                    <span>Your Cart</span>
                    <span className={classes.badge}>0</span>
                </button>
            </header>
            {/* <div>
                <img className={classes['header-image']} src={fruitImage} alt="Buy the best products here!" />
            </div> */}
        </Fragment>
    );

};

export default Header;
