import React from 'react';
import color from '../assets/img/Rectangle 47.png';
import './Style.css';

const StaffAugmentation = () => {
    const List = [
        {
            name: '01. Matching your need',
            details: 'You send us your requirements and we pick up the best fit from our pool of professionals. We send you the CVs of selected developers.'
        },
        {
            name: '02.Interview the selected professionals',
            details: 'You can interview and select the right fit.'
        },
        {
            name: '03. Introduce to your team',
            details: 'Now they are ready to work as remote professionals. You can introduce the professional to your in-house team and start assigning tasks.'
        },
        {
            name: '04. Regular feedback',
            details: 'You will be assigned an Account Manager from our end who will be in touch with you to ensure that you are happy with our service.'
        }
    ];
    return (
        <div className='Staff_Augmentation'>
            <div className="Staff_Augmentation_inr">
                <img className='color' src={color} alt="" />
                <h1>How to do Staff Augmentation?</h1>
            </div>

            <div className="Staff_Augmentation_s_listing">
                {List.map((data, index) => {
                    return (
                        <div key={index} className='list'>
                            <h1>{data.name}</h1>
                            <p>{data.details}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default StaffAugmentation;
