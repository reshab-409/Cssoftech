import React, { useEffect, useRef } from 'react';
import './Style.css';
import Arrow from '../img/Arrow 1.svg';
import man from '../img/man-smiling.png';
import color from '../img/Rectangle 47.png';
import blueArrow from '../img/blueArrow.svg';
import Projects from '../CommonComponents/Projects';
import Quote from '../CommonComponents/Quote';
import PopUpForm from '../CommonComponents/PopUpForm/PopUpForm';

const CasePage = () => {
    const childRef = useRef(null);

    const popup = () => {
        childRef.current.Open();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="banner1">
                <div className="container1">
                    <div className="banner-content1">
                        <h2>Exploring Impactful Case Studies</h2>
                        <p>
                            Unlocking Success Stories
                        </p>
                        <img src={color} className='color1' alt='color' />
                        <small>
                            Discover how our clients conquered challenges, embraced
                            innovation, and achieved remarkable outcomes in these
                            insightful case studies
                        </small>
                        <button onClick={popup} className="b bg-reverse">Let's Talk</button>
                    </div>
                    <div className="image1">
                        <img src={man} alt="" />
                    </div>
                </div>
            </section>
            <PopUpForm ModalFunction={childRef} />
            {/* Listing */}
            <div className="listing">
                <div className="container2">
                    <img src={color} className='color2' alt='color' />
                    <h1>Some of our proud <span>projects</span> that make us stand out</h1>

                    <Projects />
                    <button className='all'>View More <img src={blueArrow} alt='arrow' /></button>

                </div>
            </div>

            {/* Quote */}
            <Quote />
        </>
    );
};

export default CasePage;
