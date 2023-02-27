import ProductItemForm from './ProductItemForm';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const price = props.item.price.toFixed(2);
    return (
        <li className={classes['product-item']}>
            <div className={classes['image-container']}>
                <img src={props.item.image} alt={props.item.name} />
            </div>
            <h3>{props.item.name}</h3>
            <div className={classes['product-item-price']}>${price}</div>
            <ProductItemForm id={props.item.id} />
        </li>
    );
};

export default ProductItem;

