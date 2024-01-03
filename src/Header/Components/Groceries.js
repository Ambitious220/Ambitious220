import React, { useEffect, useState } from 'react'



function Groceries  ()  {
    const [state, setState] = useState([])

useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then((res)=> res.json())
  .then ((result)=> setState(result.products))
},[])

// Function to filter groceries products
const filterGroceries = () => {
  return state.filter((product) => product.category === 'groceries') ;
};
  return (
    <>
    <div className='container'>
      <div className='subcontainer'>
      {
        state && state.length>0 ?
        filterGroceries().map((item, category)=>{
        return (
          <div key={category} className='card' style={{width:'18rem'}}>
           <img className='card-img-top' src={item.thumbnail}
           alt='card'
           />
          <div className='card-body'>
          <h5 className="card-title">Product: {item.title}</h5>
                      <h5 className="card-title">Price: ${item.price}</h5>
                      <p className="card-text">
                        Description: {item.description}
                      </p>
                                  </div>
            </div>
        )
        })
     :     "Loading...!!"
      }
      </div>
    </div>
    </>
  )
}

export default Groceries
