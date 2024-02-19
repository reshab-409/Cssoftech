import React from 'react';
import './Style.css';
import no1 from '../../assets/img/no1.png';
import no2 from '../../assets/img/no2.png';
import no3 from '../../assets/img/no3.png';
import no4 from '../../assets/img/no4.png';
import illu from '../../img/Illu img.png';

const ITStaffAugmentationServices = () => {
  return (
    <div className='banner_it'>
      <div className="upr">
        <div className="txt">
          <h1>Revolutionizing IT</h1>
          <p>The Era of <span>Intelligent Augmentation</span> Unleashes Unprecedented Technological Advancements</p>
        </div>
        <img className='bnrimg' src={illu} alt="illu" />
      </div>
      <div className="cross"></div>
      <div className="cross1"></div>
      <div className="numbering">
        <div className='num'><img className='numin' src={no1} alt="" /><p>SKILLED & VETTED PROFESSIONALS</p></div>
        <div className='num'><img className='numin' src={no2} alt="" /><p>NO MINIMUM CONTRACT</p></div>
        <div className='num'><img className='numin' src={no3} alt="" /><p>EMPLOYERS</p></div>
        <div className='num'><img className='numin' src={no4} alt="" /><p>SAFE DATA TRANSFER</p></div>
      </div>
    </div>
  );
};

export default ITStaffAugmentationServices;
