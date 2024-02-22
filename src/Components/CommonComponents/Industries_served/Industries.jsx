import color from '../../assets/img/Rectangle 47.png';
import './Style.css';
import React from 'react';

const Industries = () => {
  const Industries = [
    {
      symbol: <span class="material-symbols-outlined">ecg_heart</span>,
      name: 'Healthcare'
    },
    {
      symbol: <span class="material-symbols-outlined">local_shipping</span>,
      name: 'Transport & Logistics'
    },
    {
      symbol: <span class="material-symbols-outlined">lunch_dining</span>,
      name: 'Food & Beverages'
    },
    {
      symbol: <span class="material-symbols-outlined">school</span>,
      name: 'Education & E-learning'
    },
    {
      symbol: <span class="material-symbols-outlined">shopping_bag</span>,
      name: 'E-Commerce'
    },
    {
      symbol: <span class="material-symbols-outlined"> real_estate_agent</span>,
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
              {/* <img className='upr1' src={data.Pic} alt="" /> */}
              <span>{data.symbol}</span>
              <p>{data.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Industries;
