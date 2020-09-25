import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name,quantity,key,price} = props.product;
    const reviewItem ={
        borderBottom:'2px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    }
    return (
        <div style={reviewItem}>
            <h3 style={{color:"blue"}}>{name}</h3>
             <p>Quantity:{quantity}</p>
             <p>${price}</p>
             <br/>
             <button 
              className="main-button"
              onClick ={() => props.handleRemoveProduct(key)}
              >Remove</button>
        </div>
       
    );
  
};

export default ReviewItem;

