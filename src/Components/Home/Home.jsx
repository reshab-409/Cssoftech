import React, { Suspense, useEffect, useRef } from 'react';
import Banner from './Banner';
import Quote from '../CommonComponents/Quote';
import buisness from '../assets/business-concept.jpg';
import website from '../assets/website-development.jpg';
import PopUpForm from '../CommonComponents/PopUpForm/PopUpForm';
import { Triangle } from 'react-loader-spinner';
const Client = React.lazy(() => import('./Client'));
const OurServices = React.lazy(() => import('./OurServices'));
const WhyChoose = React.lazy(() => import('./WhyChoose'));
const IndustryExperiances = React.lazy(() => import('./IndustryExperiances'));
const Feedback = React.lazy(() => import('../CommonComponents/Feedback'));

const Home = React.memo(({ targetRef }) => {
    const childRef = useRef(null);

    const popup = () => {
        childRef.current.Open();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='homepage'>
            <Banner />
            <Suspense fallback={<Triangle
                visible={true}
                height="80"
                width="80"
                color="#002EF4"
                ariaLabel="triangle-loading"
                wrapperStyle={{ margin: '5rem auto' }}
                wrapperClass=""
            />}>
                <Client />
            </Suspense>
            <Suspense fallback={<Triangle
                visible={true}
                height="80"
                width="80"
                color="#002EF4"
                ariaLabel="triangle-loading"
                wrapperStyle={{ margin: '5rem auto' }}
                wrapperClass=""
            />}>
                <OurServices />
            </Suspense>

            <Suspense fallback={<Triangle
                visible={true}
                height="80"
                width="80"
                color="#002EF4"
                ariaLabel="triangle-loading"
                wrapperStyle={{ margin: '5rem auto' }}
                wrapperClass=""
            />}>
                <div ref={targetRef}>
                    <WhyChoose />
                </div>
            </Suspense>


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
            <Suspense fallback={<Triangle
                visible={true}
                height="80"
                width="80"
                color="#002EF4"
                ariaLabel="triangle-loading"
                wrapperStyle={{ margin: '5rem auto' }}
                wrapperClass=""
            />}>
                <IndustryExperiances />
            </Suspense>
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
            <Suspense fallback={<Triangle
                visible={true}
                height="80"
                width="80"
                color="#002EF4"
                ariaLabel="triangle-loading"
                wrapperStyle={{ margin: '5rem auto' }}
                wrapperClass=""
            />}>
                <Feedback heading={true} />
            </Suspense>
            <Quote />
            <PopUpForm ModalFunction={childRef} />
        </div>
    )
});

export default Home;