import React from 'react';
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { Link } from "react-router-dom";

const Regsiter = () => {
  return (
    <>
    <section className='login'>
     <div className="container">
        <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
                <h3>Register</h3>
                <h1>My Account</h1>
                <h1></h1>
            </div>
        </div>
     </div>

     <form>
        <span>Email Address</span>
        <input type='text' required/>
        <span>Username * </span>
        <input type='text' required/>
        <span>Password * </span>
        <input type='text' required/>
        <span>Confirm Password * </span>
        <input type='text' required/>
        <button className='button'>Register</button>
        <Link to='/login'>Signup</Link>
     </form>

    </section>
    
    </>
  )
}

export default Regsiter;