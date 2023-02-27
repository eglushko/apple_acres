import Input from '../UI/Input';

import classes from './ProductItem.module.css';

const ProductItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input label="Quantity" input={{
                id: 'quantity_' + props.id, 
                type: 'number',
                min: '1',
                max: '20',
                step: '1',
                defaultValue: '1'
                }} />
            <button>Add to Cart</button>
        </form>
    );
};

export default ProductItemForm;

