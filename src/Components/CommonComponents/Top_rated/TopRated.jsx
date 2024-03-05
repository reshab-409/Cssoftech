import React from 'react';
import './Style.css';
import color from '../../assets/img/Rectangle 47.png';

const TopRated = ({ Heading, SubHeading,Pic }) => {
    return (
        <div className='toprated'>
            <div className="topin">
                <img className='lftpic' src={Pic} alt="" />
                <div className="rht">
                    <img className='color' src={color} alt="" />
                    <h2>We are top - rated</h2>
                    <h3>{Heading}</h3>
                    <p>{SubHeading}</p>
                </div>
            </div>
        </div>
    );
};

export default TopRated;
