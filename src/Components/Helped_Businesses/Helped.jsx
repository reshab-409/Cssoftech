import React from 'react';
import color from '../assets/img/Rectangle 47.png';
import underline from '../assets/img/underline_list.png';
import img1 from '../assets/img/listpic1.png';
import './Style.css';

const Helped = () => {
    const List = [
        {
            name: 'Small Business',
            img: img1,
            details: 'They can hire our remote professionals on-demand without adding them to their pay-roll.'
        },
        {
            name: 'Start Ups',
            img: img1,
            details: 'You have great business ideas but you are unable to hire tech talent. Hire a remote full-time professional or a Team from us.'
        },
        {
            name: 'Marketing Agency',
            img: img1,
            details: 'Add IT skills to your team by hiring remote professionals from us. On-Demand Hiring can save costs by 50%.'
        },
        {
            name: 'It Company',
            img: img1,
            details: 'Why say "NO" to new projects when we are available to help you extend your in-house team by adding skills.'
        }
    ];
    return (
        <div className='helped'>
            <div className="helped_inr">
                <img className='color' src={color} alt="" />
                <h1>Our IT Staff Augmentation Services Have Helped</h1>
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
        </div>
    );
};

export default Helped;
