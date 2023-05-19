import React from 'react';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const CartItems = ({id, cover, name, price, quantity, totalPrice}) => {
   
   
  
    
    return (
    <div className='cardList' key={id}>
       <div className='cartContent'>
          <div className='img'>
            <img src={cover} alt=''></img>
            <button className='remove flexCenter'>
                <AiOutlineClose/>
            </button>
          </div>
          <div className="details">
            <p>{name}</p>
            <label htmlFor=''>Unit Price ${price}</label>

             <div className='price'>
                <div className='qty flexCenter'>
                    <button className='plus'>
                        <AiOutlinePlus/>
                    </button>
                    <button className='num'>1{quantity}</button>
                    <button className='minus'>
                        <AiOutlineMinus/>
                    </button>
                </div>
                <div className='priceTitle'>${totalPrice}</div>
             </div>

          </div>
       </div>

    </div>
  )
}

export default CartItems;