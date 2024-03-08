import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Style.css';

const OurServices = () => {
    return (
        <section className="section service">
            <div className="container">
                <h2>
                    We use custom teams to help agencies and businesses scale their
                    development
                </h2>
                <div className="gap">
                    <OwlCarousel className='owl-carousel owl-centered' items={5} nav={false} loop autoplay dots={false} responsive={{
                        0: { items: 2 },
                        600: { items: 2 },
                        768: { items: 3 },
                        992: { items: 4 },
                        1200: { items: 5 },
                    }}>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-web-development"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Web Development</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-web-design"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Web Design</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-ui-ux"><span className="path1"></span><span className="path2"></span></span>
                                <h3>App UI UX</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-qa"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Testing & QA</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-data-services"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Data Services</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-web-development"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Web Development</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-web-design"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Web Design</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-ui-ux"><span className="path1"></span><span className="path2"></span></span>
                                <h3>App UI UX</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-qa"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Testing & QA</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-data-services"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Data Services</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-web-development"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Web Development</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-web-design"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Web Design</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-ui-ux"><span className="path1"></span><span className="path2"></span></span>
                                <h3>App UI UX</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-qa"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Testing & QA</h3>
                            </div>
                        </div>
                        <div className="item">
                            <div className="services-item">
                                <span className="icon-data-services"><span className="path1"></span><span className="path2"></span></span>
                                <h3>Data Services</h3>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            {/* <div className="pt-5">
                <a href="#" className="button-outline">View All Services</a>
            </div> */}
            {/* </div> */}
        </section>
    );
};

export default OurServices;
