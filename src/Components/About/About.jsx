import React, { useEffect } from 'react';
import Client from '../Home/Client';
import Quote from '../CommonComponents/Quote';
import IndustryExperiances from '../Home/IndustryExperiances';
import OurServices from '../Home/OurServices';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <section className="banner inner-banner">
                <div className="container">
                    <div className="banner-content">
                        <h2>About Us</h2>
                        <div className="banner-cta-block">
                            <h2>Are you interested to learn more about our development services?</h2>
                            <Link to='/contactUs' className="button-primary">Book an Appoinment</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="app-breadcrumb">
                    <Link to='/'><i className="bi bi-arrow-left"></i></Link>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"> <Link to='/'>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Abous Us</li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* <!-- Content --> */}
            <section className="service-details">
                <div className="container">
                    <h3 className="title">Choose from leading shipping and payment providers to find your best fit solutions, without penalties</h3>
                    <p>Welcome to CreationSoul, your premier destination for innovative web development solutions. We take pride in extending our services to customers not only across India but across the globe. As a leading software development company, we play a leading role in providing end-to-end services including design, development, testing, deployment and digital marketing.
                    </p>
                    <p>
                    Since our inception, we have been dedicated to empowering entrepreneurs by leveraging our expertise to solve their most pressing challenges. Our mission is to contribute to the creation of a better software ecosystem, which fosters innovation and enables individuals to realize their aspirations. We help our clients unlock new potential and seize growth opportunities.</p>
                    <p>
                    Whether a new business or an established business, CreationSoul is your trusted partner to navigate the ever-evolving digital landscape. Join us as we embark on a journey to build a better world through technology.
                    </p>
                </div>
            </section>

            <OurServices />
            <Client />
            <IndustryExperiances />
            <Quote />

        </div>
    );
};

export default About;
