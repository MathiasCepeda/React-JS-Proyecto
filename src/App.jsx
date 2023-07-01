import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Regsiter from "./pages/login/Regsiter";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import { useSelector } from "react-redux";

function App() {
  
  const isLoggIn = useSelector((state)=> state.auth.isLoggIn)
  const cartItems = useSelector((state)=>state.cart.itemsList)
  console.log(cartItems)

  return (
    <>
    {isLoggIn && (

    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/regsiter" element={<Regsiter/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    )}
    {!isLoggIn && <Login/>}
    </>
  )
}

export default App;
