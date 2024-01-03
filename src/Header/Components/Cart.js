import React from "react";
import { useSelector } from "react-redux";


export default function Cart() {
  const addToCart = useSelector((state) => state);
  const products = addToCart.Products || [];

  const handleReset = () => {
    window.location.reload(); // Reload the page to reset the cart
  };

  return (
    <>
        <div className="cart-details">
        <h3 >Cart</h3>
        
         <hr/>
        <h5 className="card-title">Total Products: {products.length}</h5>
          <h5 className="card-title">
            Total Price:
            {products.length > 0
              ? products.reduce((a, b) => a + b.price, 0)
              : 0}
          </h5>
          <br/>
          <button className="btn btn-primary" type="reset" onClick={handleReset}>Reset</button>
        </div> 

          <div className="cardCart" >
          {products.map((product) => (
            <div key={product.id}> 
              <br/>
              <img
                className="card-img-top"
                src={product.thumbnail}
                alt={product.title}
              />
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Price: ${product.price}</p>
            </div>
          ))}
          



       
      </div>
    </>
  );
}

