import React,{ useEffect, useState }  from 'react'


function Mobiles (){
  const [state, setState] = useState([]);


useEffect(()=>{
fetch("https://dummyjson.com/products")
.then((res)=> res.json())
.then((result)=> setState(result.products))
},[])

// Function to filter mobile devices
const filterMobileDevices = () => {
  return state.filter((product) => product.category === 'smartphones');
};


  return (
    <>
    <div className='container'>
      <div className='subcontainer'>
      {
        state && state.length>0 ?
        filterMobileDevices().map((item, category)=>{
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

export default Mobiles
