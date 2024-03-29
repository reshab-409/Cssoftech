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
                    <OwlCarousel className='owl-carousel owl-centered' items={5} loop nav={false} autoplay dots={false} responsive={{
                        0: { items: 2 },
                        600: { items: 2 },
                        768: { items: 3 },
                        992: { items: 4 },
                        1200: { items: 5 },
                    }}>
                        <div className="item">
                            <div className="experience-item">
                                {/* <span className="icon-digital-marketing"></span> */}
                                <span className="material-symbols-outlined">
                                    lunch_dining
                                </span>
                                <h3>Food & Beverages</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="experience-item">
                                {/* <span className="icon-e-commerce"></span> */}
                                <span className="material-symbols-outlined">
                                    shopping_bag
                                </span>
                                <h3>Retail & E-Commerce</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="experience-item">
                                {/* <span className="icon-logistics-transportation"></span> */}
                                <span className="material-symbols-outlined">
                                    local_shipping
                                </span>
                                <h3>Logistics & Transportation</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="experience-item">
                                {/* <span className="icon-automotive"></span> */}
                                <span className="material-symbols-outlined">
                                    ecg_heart
                                </span>
                                <h3>Health Care</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="experience-item">
                                {/* <span className="icon-e-learning"></span> */}
                                <span className="material-symbols-outlined">
                                    school
                                </span>
                                <h3>Educaton & E-Learning</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="experience-item">
                                {/* <span className="icon-e-commerce"></span> */}
                                <span className="material-symbols-outlined">
                                    real_estate_agent
                                </span>
                                <h3>Real Estate</h3>
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
