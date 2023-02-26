import { useEffect, useState, useCallback, Fragment } from 'react';

import ProductsList from './ProductsList';

const Products = (props) => {
    const fetchProductsCall = 'https://sweet-apple-acres.netlify.app/.netlify/functions/api/products';
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = useCallback(async () => {
        console.log('fetchProducts');
        setIsLoading(true);
        setError(null);
        try {
              fetch(fetchProductsCall)    
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setProducts(data);
                });
        }
        catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    let content = <p>No products found.</p>;
    if (products.length > 0) {
        content = <ProductsList items={products} />;
    }
    
    if (error) {
        content = <p>{error}</p>;
    }
    
    if (isLoading) {
        content = <p>Loading...</p>;
    }
        
    return (
        <Fragment>
            {content}
        </Fragment>
    );
};

export default Products;