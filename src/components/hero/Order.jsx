import React from 'react';
import './slider.css';
import { order } from '../../assets/data/data';

const Order = () => {
  return (
    <>
    <div className="order">
        <div className="container grid">
            {order.map((item) => (
              <div className="box flexCenter" key={item.id}>
                <div className="num">
                    <h1>{item.id}</h1>
                </div>
                <div className="text">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
              </div>  
            ))}
        </div>
    </div>
    
    </>
  )
}

export default Order