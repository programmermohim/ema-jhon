import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
  const {name,img,seller,price,stock} = props.product;
    console.log(props.product);
    return (
        <div class="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div>
                    <h4  className="product-detail">{name}</h4>
                    <p>By:{seller}</p>
                    <p>price:${price}</p>
                    <p>Only {stock} left in stock</p>
                    <button className="main-button"
                    onClick ={() =>props.handleAddProduct(props.product)}
                    ><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;