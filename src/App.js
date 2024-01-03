import "./App.css";
import Header from "./Header/Components/Header";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Header/Components/Home";
import Mobiles from './Header/Components/Mobiles';
import Electronics from "./Header/Components/Electronics";
import Beauty from './Header/Components/Beauty';
import Homedecor from './Header/Components/Homedecor';
import Footer from "./Footer/Footer";
import Login from "./Header/Components/Login";
import Cart from "./Header/Components/Cart";
import Products from "./Header/Components/Products";
import Groceries from "./Header/Components/Groceries";
import Signup from "./Header/Components/Signup";




function App() {


  return (
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/mobiles" element={<Mobiles/>}/>
          <Route path="/electronics" element={<Electronics/>}/>
          <Route path="/beauty" element={<Beauty/>}/>
          <Route path="/homedecor" element={<Homedecor/>}/>
          <Route path="/groceries" element={<Groceries/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      
        <Footer/>
      </BrowserRouter>
      

  );
}

export default App;
