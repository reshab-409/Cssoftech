import React, { useEffect, useRef } from 'react';
import Banner from './Banner';
import Client from './Client';
import Quote from '../CommonComponents/Quote';
import IndustryExperiances from './IndustryExperiances';
import OurServices from './OurServices';
import WhyChoose from './WhyChoose';
import buisness from '../assets/business-concept.jpg';
import website from '../assets/website-development.jpg';
import Feedback from '../CommonComponents/Feedback';
import PopUpForm from '../CommonComponents/PopUpForm/PopUpForm';

const Home = ({ targetRef }) => {
    const childRef = useRef(null);

    const popup = () => {
        childRef.current.Open();
    };

    useEffect(() => {
            window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Banner />
            <Client />
            <OurServices />
            
            <div ref={targetRef}>
                <WhyChoose />
            </div>

            <section className="section schedule">
                <div className="container">
                    <div className="schedule-block">
                        <div className="item">
                            <span className="icon-access"></span>
                            <h5>
                                Accelerating<br />
                                first-to-market access
                            </h5>
                        </div>
                        <div className="item">
                            <span className="icon-access"></span>
                            <h5>
                                Accelerating<br />
                                first-to-market access
                            </h5>
                        </div>
                        <div>
                            <button onClick={popup} className="button-primary bg-reverse">Let's Talk</button>
                        </div>
                    </div>
                </div>
            </section>
            <IndustryExperiances />
            <section className="section grey-bg case-studies">
                <div className="container">
                    <div className="case-studies-header">
                        <h5>Case Studies</h5>
                        <h2>
                            Through these articles, we also share our latest thinking, ideas,
                            and perspectives
                        </h2>
                    </div>
                    <div className="row align-items-center case-studies-block">
                        <div className="col-md-5">
                            <div className="case-studies-block-header">
                                <h3>
                                    Mobile Product Strategy, UX and Service Design for a
                                    Multinational Fortune 50 Media Company
                                </h3>
                                <p>
                                    Define, design, prototype and test a new mobile device and
                                    service that will disrupt an already-crowded market
                                </p>
                                <a href="#">Read more <i className="bi bi-arrow-right-circle-fill"></i></a>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <div className="case-studies-block-image">
                                <img src={buisness} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section case-studies">
                <div className="container">
                    <div className="row align-items-center case-studies-block">
                        <div className="col-md-6">
                            <div className="case-studies-block-image">
                                <img src={website} alt="" />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="case-studies-block-header">
                                <h3>
                                    The Formula to Increase Sales Qualified Leads on Your Enterprise
                                    Website
                                </h3>
                                <p>
                                    DDefine, design, prototype and test a new mobile device and
                                    service that will disrupt an already-crowded market
                                </p>
                                <a href="#">Read more <i className="bi bi-arrow-right-circle-fill"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Feedback heading={true} />
            <Quote />
            <PopUpForm ModalFunction={childRef} />
        </div>
    )
}

export default Home;

