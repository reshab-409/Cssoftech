import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Style.css';

const IndustryExperiances = () => {
    return (
        <section className="section experience">
            <div className="container">
                <div className="section-header">
                    <h2>Industry Experience</h2>
                    <p>
                        Through these articles, we also share our latest thinking, ideas,
                        and perspectives
                    </p>
                </div>
                <div className="mt">
                    <OwlCarousel className='owl-carousel owl-centered' items={5} loop nav={false} autoplay responsive={{
                        0: { items: 2 },
                        600: { items: 2 },
                        768: { items: 3 },
                        992: { items: 4 },
                        1200: { items: 5 },
                    }}>
                        <div className="item">
                            <div className="experience-item">
                                <span className="icon-digital-marketing"></span>
                                <h5>Food & Beverages</h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="experience-item">
                                <span className="icon-e-commerce"></span>
                                <h5>Retail & E-Commerce</h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="experience-item">
                                <span className="icon-logistics-transportation"></span>
                                <h5>Logistics & Transportation</h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="experience-item">
                                <span className="icon-automotive"></span>
                                <h5>Health Care</h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="experience-item">
                                <span className="icon-e-learning"></span>
                                <h5>Educaton & E-Learning</h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="experience-item">
                                <span className="icon-e-commerce"></span>
                                <h5>Real Estate</h5>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                {/* <div className="pt-5">
                    <a href="#" className="button-primary btn-fill">View All</a>
                </div> */}
            </div>
        </section>
    );
};

export default IndustryExperiances;
