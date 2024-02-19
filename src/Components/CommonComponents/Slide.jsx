import React, { useEffect, useRef, useState } from 'react';
import rightArrow from '../img/Right.svg';
import leftArrow from '../img/Left.svg';

import Data from '../DummyData/SlideData';
import './Slide.css';

const Slide = () => {
    const [counter, setCounter] = useState(0);
    const slidesRef = useRef([]);

    useEffect(() => {
        slidesRef.current.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`;
        });
    }, [slidesRef.current]);

    const goPrev = () => {
        setCounter((prevCounter) => (prevCounter - 1 + slidesRef.current.length) % slidesRef.current.length);
    };

    const goNext = () => {
        setCounter((prevCounter) => (prevCounter + 1) % slidesRef.current.length);
    };

    useEffect(() => {
        slidesRef.current.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    }, [counter]);

    // Automatic slide every 3 seconds
    // useEffect(() => {
    //     const intervalId = setInterval(goNext, 7000);

    //     return () => clearInterval(intervalId);
    // }, []);


    return (
        <div className="c_upr">
            <div className="upr">
                <main>
                    {Data.map((slide, index) => (
                        <div className="slide" ref={(el) => (slidesRef.current[index] = el)} key={index}>
                            <div className="inr">
                                <div className="ininr">
                                     <p>{slide.text}</p>
                                <small>{slide.name}/{slide.comapany}/{slide.address}</small>
                                <img src={slide.pic} className='pic' alt="pic" />
                                </div>
                               
                            </div>
                        </div>
                    ))}

                    <div className="nav">
                        <button onClick={goPrev}>
                            <img width="40" height="40" src={leftArrow} alt="circled-left-2" className="nevarrow" />
                        </button>
                        <button onClick={goNext}>
                            <img width="40" height="40" src={rightArrow} alt="circled-right-2" className="nevarrow1" />
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Slide;
