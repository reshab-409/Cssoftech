import React from 'react';
import client from '../assets/img/client.jpg';
import OwlCarousel from 'react-owl-carousel';

const Feedback = ({ heading }) => {

    return (
        <div>
            <section className="section container testimonials">
                {heading && <h2>Our Clients says</h2>}
                {/* <div className="owl-carousel owl-theme testimonials-slider"> */}
                <OwlCarousel className='owl-carousel owl-centered' items={1} nav={false} loop  autoplay dots={false}>
                    <div className="item">
                        <div className="testimonials-block">
                            <div className="icon-quote"></div>
                            <p className="testimonials-block-text">
                                I love helping to cultivate a culture that sets people up to
                                succeed, gives people the space to work through challenges, and
                                values the diverse perspectives everyone brings to the work."
                            </p>
                            <div className="testimonials-block-client-info">
                                Mukesh Jain / Mediateck / Kolkata
                            </div>
                            <div className="testimonials-block-client-image">
                                <img src={client} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-block">
                            <div className="icon-quote"></div>
                            <p className="testimonials-block-text">
                                I love helping to cultivate a culture that sets people up to
                                succeed, gives people the space to work through challenges, and
                                values the diverse perspectives everyone brings to the work."
                            </p>
                            <div className="testimonials-block-client-info">
                                Mukesh Jain / Mediateck / Kolkata
                            </div>
                            <div className="testimonials-block-client-image">
                                <img src={client} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-block">
                            <div className="icon-quote"></div>
                            <p className="testimonials-block-text">
                                I love helping to cultivate a culture that sets people up to
                                succeed, gives people the space to work through challenges, and
                                values the diverse perspectives everyone brings to the work."
                            </p>
                            <div className="testimonials-block-client-info">
                                Mukesh Jain / Mediateck / Kolkata
                            </div>
                            <div className="testimonials-block-client-image">
                                <img src={client} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-block">
                            <div className="icon-quote"></div>
                            <p className="testimonials-block-text">
                                I love helping to cultivate a culture that sets people up to
                                succeed, gives people the space to work through challenges, and
                                values the diverse perspectives everyone brings to the work."
                            </p>
                            <div className="testimonials-block-client-info">
                                Mukesh Jain / Mediateck / Kolkata
                            </div>
                            <div className="testimonials-block-client-image">
                                <img src={client} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonials-block">
                            <div className="icon-quote"></div>
                            <p className="testimonials-block-text">
                                I love helping to cultivate a culture that sets people up to
                                succeed, gives people the space to work through challenges, and
                                values the diverse perspectives everyone brings to the work."
                            </p>
                            <div className="testimonials-block-client-info">
                                Mukesh Jain / Mediateck / Kolkata
                            </div>
                            <div className="testimonials-block-client-image">
                                <img src={client} alt="" />
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                {/* </div> */}
            </section>
        </div>
    );
};

export default Feedback;
