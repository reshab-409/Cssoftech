import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PopUpForm from '../CommonComponents/PopUpForm/PopUpForm';

const Banner = () => {
    const childRef = useRef(null);

    const popup = () => {
      childRef.current.Open();
    };
  
    return (
        <div>
            <section className="banner">
                <div className="container">
                    <div className="banner-content">
                        <h2>One Company. Many Divisions.</h2>
                        <p>
                            End-to-end digital marketing division focused on driving more users,
                            leads and sales.
                        </p>
                        <Link onClick={popup} className="button-primary">Let's Talk</Link>
                    </div>
                </div>
            </section>
            <PopUpForm ModalFunction={childRef} />
        </div>
    );
};

export default Banner;
