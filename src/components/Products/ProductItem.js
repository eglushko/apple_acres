import { useContext } from 'react';
import ProductItemForm from './ProductItemForm';
import CartContext from '../../store/CartContext';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const price = props.item.price.toFixed(2);
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (quantity) => {
        const item = props.item;
        item.quantity = quantity;
        cartCtx.addItem(item);
    };
    return (
        <li className={classes['product-item']}>
            <div className={classes['image-container']} onClick={props.onOpenProductPage}>
                <img src={props.item.image} alt={props.item.name} />
            </div>
            <h3 onClick={props.onOpenProductPage}>{props.item.name}</h3>
            <div className={classes['product-item-price']}>${price}</div>
            <ProductItemForm id={props.item.id} onAddToCart={addToCartHandler} />
        </li>
    );
};

export default ProductItem;

