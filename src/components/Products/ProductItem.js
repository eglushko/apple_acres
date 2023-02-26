import classes from './Products.module.css';

const ProductItem = (props) => {
    const price = props.item.price.toFixed(2);
    return (
        <li className={classes['product-list-item']}>
            {/* <div className={classes['product-item']}> */}
                <div className={classes['image-container']}>
                    <img src={props.item.image} alt={props.item.name} />
                </div>            
                <h3>{props.item.name}</h3>
                <p className={classes['product-item-description']}>{props.item.description}</p>
                <div className={classes['product-item-price']}>${price}</div>
            {/* </div> */}
        </li>
    );
};

export default ProductItem;

