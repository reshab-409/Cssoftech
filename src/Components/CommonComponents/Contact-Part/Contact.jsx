import React from 'react';
import './Style.css';
import lftImg from '../../assets/img/Contact_lft_img.png';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact_part'>
            <div className="lft_part">
                <img className='lftimg' src={lftImg} alt="" />
            </div>

            <div className="rht_part">
                <p>Unlock the power of IT Staff Augmentation with IndoTech Solutions! With our dedicated developer plan, you secure the expertise of a skilled professional working diligently for 8 hours a day, 5 days a week, totaling 160 hours per month. Your designated developer becomes an integral part of your team, adapting to project changes seamlessly.</p>
                <small>The cost of a Full-Time Software Developer starts from $1800 and goes to $5000 depending on their experience.</small>
                <Link to='/contactUs'><button className='contact_btn bg-reverse'>
                    Contact Us
                </button></Link>
            </div>
        </div>
    );
};

export default Contact;
