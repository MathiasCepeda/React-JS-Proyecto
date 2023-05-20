import React from 'react';
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
     <section className='login'>
     <div className="container">
        <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
                <h3>Login</h3>
                <h1>My Account</h1>
                <h1></h1>
            </div>
        </div>
     </div>

     <form>
        <span>Username or Email Address</span>
        <input type='text' required/>
        <span>Password * </span>
        <input type='text' required/>
        <button className='button'>Log in</button>


        <Link to="/regsiter">Signup</Link>
     </form>

    </section>
    </>
  )
}

export default Login;
