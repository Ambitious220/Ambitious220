import React, { useEffect, useState } from "react";
import { addProduct } from "../../Redux/Slices/Slices";
import { useDispatch } from "react-redux";


function Products() {
  const [state, setState] = useState([]);
  
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setState(result.products));
   
  }, []);

  


  return (
    <>

      <div className="container">
        <div className="subcontainer">
          {state && state.length > 0
            ? state.map((item, index) => {
                return (
                  <div key={index} className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={item.thumbnail}
                      alt="card"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Product: {item.title}</h5>
                      <h5 className="card-title">Price: ${item.price}</h5>
                      <p className="card-text">
                        Description: {item.description}
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary"
                        onClick={() => dispatch (addProduct(item))}>
                        Add to Cart 
                      </a>
                
                    </div>
                  </div>
                );
              })
            : 
            "Loading...!!"
            
            }
        </div>
      </div>
     
    </>
  );
}

export default Products;
