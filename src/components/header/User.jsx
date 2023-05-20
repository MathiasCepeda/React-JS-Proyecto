import React from 'react';
import { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsBagCheck } from 'react-icons/bs';
import { GrHelp } from 'react-icons/gr';
import Chico from '../../assets/images/Chico.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const User = () => {
  
   const user = true;
   const [profileOpen,setProfileOpen] = useState(false)
   
   const close = () => {
    setProfileOpen(null)
  }
  
  return (
    <>
     <div className="profile">
     {user ? (
      <>
      <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
        <img src={Chico}  alt="" />
      </button>

      {profileOpen && (
        <div className="openProfile boxItems" onClick={close}>
          <div className="img">
            <div className="img">
            <Link to='/account'>
            <img src={Chico}  alt="" />
            </Link>
            </div>
            <div className="text">
              <h4>Rogelio delpo</h4>
              <label htmlFor=''>Los Angeles,CA</label>
            </div>
          </div>
           <Link to='/login'>
           <button className='box'>
             <IoSettingsOutline className='icon'/>
             <h4>My Account</h4>
            </button>
            </Link>
            <button className='box'>
             <BsBagCheck className='icon'/>
             <h4>My Order</h4>
            </button>
            <button className='box'>
             <AiOutlineHeart className='icon'/>
             <h4>Wishlist</h4>
            </button>
            <button className='box'>
             <GrHelp className='icon'/>
             <h4>Help</h4>
            </button>
            <button className='box'>
             <BiLogOut className='icon'/>
             <h4>Log Out</h4>
            </button>
        </div>
      )}
      </>

     ): (
      
        <button>My Account</button>
      )}

     </div>
    
    
    </>
  )
}

export default User;