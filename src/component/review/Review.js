import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../reviewItem/ReviewItem';
import Cart from '../cart/Cart.css'

const Review = () => {
    const [cart,setCart] = useState([]);

    const handleRemoveProduct =(productKey) =>{
         console.log("remove product",productKey)   
         const newCart =cart.filter( pd => pd.key !== productKey );
         setCart(newCart);
    }

    useEffect(() =>{
        // cart
        const savedCart = getDatabaseCart();
        const productKeys =Object.keys(savedCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
       setCart(cartProducts)
    },[])
    return (
        <div className="shop-container">
           <div className="product-container">
           {
               cart.map(pd => <ReviewItem 
                key={pd.key}
                 handleRemoveProduct ={handleRemoveProduct}
                product ={pd}></ReviewItem>)
           }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Review;