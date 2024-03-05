import color from '../../assets/img/Rectangle 47.png';
import underline from '../../assets/img/underline_list.png';
import './Style.css';
import React from 'react';

const DevelopementService = ({ Heading, SubHeading, Pic, List,className }) => {
    return (
        <div className='cs_dev_service'>
            <div className="upr">
                <img className='color' src={color} alt="" />
                <h2>{Heading}</h2>
                <h3>{SubHeading}</h3>
            </div>
            <div className="inr">
                <div className="lft">
                    <div className={className}>
                        {List.map((data, index) => {
                            return (
                                <div key={index} className='list'>
                                    <img className='upr1' src={data.img} alt="" />
                                    <h4>{data.name}</h4>
                                    <img className='lwr1' src={underline} alt="" />
                                    <p>{data.details}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="rht">
                    <img src={Pic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DevelopementService;
