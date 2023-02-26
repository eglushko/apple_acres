import ProductItem from './ProductItem';

import classes from './Products.module.css';

const ProductsList = (props) => {

    // const mappedList = props.items.map(item => <li>{item.name}</li>);
    const mappedList = props.items.map((item) => (
        <ProductItem
            key={item.id}
            item={item}
        />
    ));

    return (
        <section className={classes.products}>
            <ul>
                {mappedList}
            </ul>
        </section>
    );
};

export default ProductsList;