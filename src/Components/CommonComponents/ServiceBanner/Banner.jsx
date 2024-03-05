import React from 'react';
import './Style.css';
import no1 from '../../assets/img/no1.png';
import no2 from '../../assets/img/no2.png';
import no3 from '../../assets/img/no3.png';
import no4 from '../../assets/img/no4.png';

const Banner = ({ Heading, SubHeading, Pic, bnrClass }) => {
    return (
        <div className='banner_it1'>
            <div className="upr">
                <div className="txt">
                    <h1>{Heading}</h1>
                    <h2>{SubHeading}</h2>
                </div>
                <img className={bnrClass ? bnrClass : 'bnrimg'} src={Pic} alt="illu" />
            </div>

            <div className="cross"></div>
            <div className="cross1"></div>

            <div className="numbering">
                <div className='num'><img className='numin' src={no1} alt="" /><h3>SKILLED & VETTED PROFESSIONALS</h3></div>
                <div className='num'><img className='numin' src={no2} alt="" /><h3>NO MINIMUM CONTRACT</h3></div>
                <div className='num'><img className='numin' src={no3} alt="" /><h3>EMPLOYERS</h3></div>
                <div className='num'><img className='numin' src={no4} alt="" /><h3>SAFE DATA TRANSFER</h3></div>
            </div>
        </div>
    );
};

export default Banner;
