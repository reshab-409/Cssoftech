import React, { useState } from 'react';
import './Style.css';
import color from '../../assets/img/Rectangle 47.png';
import Contact from '../Contact-Part/Contact';

const Hiring = () => {
    const [contactContent, setContactContent] = useState(true);

    const fullTime = () => {
        setContactContent(true);
    };

    const partTime = () => {
        setContactContent(false);
    };

    return (
        <div className='ovr'>
            <div className={'hiring'}>
                <div className="upr_part">
                    <h1>
                        <img className='color' src={color} alt="" />
                        Flexible Hiring Options For On-Demand IT Staff Augmentations
                    </h1>
                </div>
                <div className="lwr_btns">
                    <button onClick={fullTime} className='lft_btn'>
                        Full Time Hiring
                    </button>
                    <button onClick={partTime} className='rht_btn'>
                        PAY AS YOU GO HIRING (HOURLY HIRING)
                    </button>
                </div>
            </div>
            <div className={`contact-container ${contactContent ? 'contact-slide-out' : 'contact-slide-in'}`}>
                {contactContent && <Contact />}
            </div>
            <div className={`contact-container ${!contactContent ? 'contact-slide-out1' : 'contact-slide-in1'}`}>
                {!contactContent && <Contact />}
            </div>
        </div>
    );
};

export default Hiring;
