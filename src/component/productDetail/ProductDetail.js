import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd =>pd.key === productKey);
    // console.log(product);
    return (
        <div>
            <h1>{productKey} will comming soon.......</h1>
            <Product 
            showaddToCart ={false}
            product ={product}></Product>
        </div>
    );
};

export default ProductDetail;