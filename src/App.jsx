import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Regsiter from "./pages/login/Regsiter";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";

function App() {
  

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/regsiter" element={<Regsiter/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
