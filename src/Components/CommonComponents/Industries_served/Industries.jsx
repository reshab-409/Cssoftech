import color from '../../assets/img/Rectangle 47.png';
import truck from '../../assets/Industries_truck.png';
import health from '../../assets/Industries_health.png';
import phone from '../../assets/Industries_phone.png';
import man from '../../assets/Industries_man.png';
import cart from '../../assets/Industries_cart.png';
import computer from '../../assets/Industries_computer.png';
import './Style.css';
import React from 'react';

const Industries = () => {
  const Industries = [
    {
        Pic: health,
        name: 'Healthcare'
    },
    {
        Pic: truck,
        name: 'Transport & Logistics'
    },
    {
        Pic: man,
        name: 'Food & Beverages'
    },
    {
        Pic: phone,
        name: 'Education & E-learning'
    },
    {
        Pic: cart,
        name: 'E-Commerce'
    },
    {
        Pic: computer,
        name: 'Real Estate'
    }
]
  return (
    <div className='industries'>
      <div className="upr">
        <img className='color' src={color} alt="" />
        <h1>Industries We Have Served </h1>
      </div>

      <div className="s_listing">
        {Industries.map((data, index) => {
          return (
            <div key={index} className='list'>
              <img className='upr1' src={data.Pic} alt="" />
              <p>{data.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Industries;
