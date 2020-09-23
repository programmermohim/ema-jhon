import React from 'react';

const Cart = (props) => {
    const cart =props.cart
    console.log(props);
    const total =cart.reduce((total,prd) => total + prd.price,0)
    let shipping = 0;
    if(total>35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }
    const tax =( total/10);
    const grandTotal = (total + shipping +tax);
    const formateNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <h3>Items Order:{cart.length}</h3>
            <h3> Product Price :{formateNumber(total)}</h3>
            <h3>Shipping Cost :{shipping}</h3>
            <p><small>tax + vat:{formateNumber(tax)}</small></p>
            <h1>Total Price:{formateNumber(grandTotal)}</h1>
        </div>
    );
};

export default Cart;