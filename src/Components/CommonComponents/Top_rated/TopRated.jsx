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
                    <h1>We are top - rated</h1>
                    <p>{Heading}</p>
                    <small>{SubHeading}</small>
                </div>
            </div>
        </div>
    );
};

export default TopRated;
