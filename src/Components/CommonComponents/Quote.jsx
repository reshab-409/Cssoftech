import React, { useRef } from 'react';
import './Style.css';
import PopUpForm from './PopUpForm/PopUpForm';

const Quote = () => {
    const childRef = useRef(null);

    const popup = () => {
        childRef.current.Open();
    };

    return (
        <div className='quote-main'>
            <div className="wrpr">
                  <div className="txt">
                <p>Request A Quote</p>
                <small>Tell us about your project to start the conversation!</small>
            </div>
            <button onClick={popup} className='button-primary'>Let's Talk</button>
            </div>
          
            <PopUpForm ModalFunction={childRef} />
        </div>
    );
};

export default Quote;
