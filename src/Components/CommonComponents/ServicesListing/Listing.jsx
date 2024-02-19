import React from 'react';
import './Style.css';
import underline from '../../assets/img/underline_list.png';
import color from '../../assets/img/Rectangle 47.png';

const Listing = ({ List, Heading, SubHeading, Display }) => {
    return (
        <div className='service_listing'>
            <div className="inr_listing">
                <div className="upr_part">
                    <h1>
                        <img className='color' src={color} alt="" />
                        {Heading}
                    </h1>
                    <p>
                        {SubHeading}
                    </p>
                </div>
                <div className="s_listing">
                    {List.map((data, index) => {
                        return (
                            <div key={index} className='list'>
                                <img className='upr1' src={data.img} alt="" />
                                <h1>{data.name}</h1>
                                <img className='lwr1' src={underline} alt="" />
                                <p>{data.details}</p>
                            </div>
                        )
                    })}
                </div>
                <button style={{ display: Display }} className='viewAll_btn'>View All</button>
            </div>
        </div>
    );
};

export default Listing;
