import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";


const Login = () => {

    const[form, setForm] = useState({});
  
    const navigate = useNavigate();
    
    const handleChange = (e) => {
      // console.log(e.target.value);
      setForm({
        ...form, 
        [e.target.name]: e.target.value
       
      })
      
    }

      const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body: JSON.stringify(form),  //generally we use to send strings
      headers:{      // additional info-like type of data or request
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
     
      navigate("/Home");
      }
      
      

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="container mt-2">
      <h2 className="mb-3">Login</h2>
      
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" name='username'  type="email" id="email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input className="form-control"  name='password' type="password" id="password" onChange={handleChange} required />
        </div>
        <div className='buttons'>
        <button className="btn btn-primary" type="submit"  id='button'>
          Login
        </button>

        <button className="btn btn-primary" type="reset"  id='button'> 
        {/* disabled={!validateForm()} */}
          Reset
        </button>
        <Link to="/Signup">
        <button className="btn btn-primary" type="reset"  id='button'> 
        {/* disabled={!validateForm()} */}
          SignUp
        </button>
        </Link>
        </div>
     
      <hr/>
    </div>
    </form>
</>
  )
}

export default Login
