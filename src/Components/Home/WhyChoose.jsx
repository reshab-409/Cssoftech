import React, { useEffect, useState } from 'react';
import img1 from '../assets/img/img1.png';
import CountUp from "react-countup";

const WhyChoose = () => {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Adjust the scroll threshold based on the view width
            const scrollThreshold = window.innerWidth < 768 ? 2100 : 1500;

            // Check if the user has scrolled to the adjusted position or use other conditions
            if (window.scrollY > scrollThreshold) {
                setShouldRender(true);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <section className="section why-choose">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-5">
                            <div className="why-choose-conatiner">
                                <svg>
                                    <circle cx="170" cy="170" r="170"></circle>
                                </svg>
                                <div className="why-choose-img">
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <h2>Why choose Creationsoul</h2>
                            <p>Comprehensive Services: We offer end-to-end solutions for your digital needs. We provide all services from conceptualizing and designing your website.</p>
                            <div className="why-choose-item">
                                <div className="why-choose-item-block">
                                    <h2>{shouldRender && <CountUp duration={5} className="counter" end={10} />}</h2>
                                    <p>
                                        Years of <br />
                                        Digital Services
                                    </p>
                                </div>
                                <div className="why-choose-item-block">
                                    <h2>{shouldRender && <CountUp duration={5} className="counter" end={40} />}</h2>
                                    <p>
                                        Employees<br />
                                        Strangths
                                    </p>
                                </div>
                                <div className="why-choose-item-block">
                                    <h2>{shouldRender && <CountUp duration={5} className="counter" end={500} />}</h2>
                                    <p>
                                        Built over 500<br />
                                        websites
                                    </p>
                                </div>
                                <div className="why-choose-item-block">
                                    <h2>0{shouldRender && <CountUp duration={5} className="counter" end={5} />}</h2>
                                    <p>
                                        Office<br />
                                        Locations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;
