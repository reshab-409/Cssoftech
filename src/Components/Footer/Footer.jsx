import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from '../img/logo.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

const Footer = ({ onHeaderClick }) => {
    // Why choose us page scroll
    const handleLinkClick = () => {
        // You can add a delay to ensure navigation happens before scrolling
        setTimeout(() => {
            onHeaderClick()
        }, 1000); // Adjust the delay as needed
    };
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block-container">
                    <div className="footer-block">
                        <h4>Company</h4>
                        <div className="toggle-menu">
                            <Link to='/' onClick={handleLinkClick}>Why Choose Us?</Link>
                            <Link>Certifications</Link>
                            <Link to='/about'>About</Link>
                        </div>
                    </div>
                    <div className="footer-block">
                        <h4>Our Services</h4>
                        <div className="toggle-menu">
                            <Link to='/web-development'>Web Design & Development</Link>
                            <Link to='/mobile-development'>Mobile Application Development</Link>
                            <Link to='/'>Digital Marketing</Link>
                            <Link to='/ecommerce-development'>E-commerce Development</Link>
                            <Link to='/softwear-development'>Softwear Development</Link>
                            <Link to='/'>Full Stack Development</Link>
                            <Link to='/it-staff-augmentation'>IT Augmentation</Link>
                        </div>
                    </div>
                    <div className="footer-block">
                        <h4>Industries</h4>
                        <div className="toggle-menu">
                            <Link to='/healthcare'>Health Care</Link>
                            <Link>Food & Beverages</Link>
                            <Link>Real Estate</Link>
                            <Link>Education & E-learning</Link>
                            <Link>Retail & E-commerce</Link>
                        </div>
                    </div>
                    <div className="footer-block">
                        <h4>Contact Us</h4>
                        <div className="toggle-menu">
                            <address>2055 Gateway Place - Ste 500 Delhi, India</address>
                            <a href="mailto:info@creationsoul.com">info@creationsoul.com</a>
                            <a href="tel:+91 (xxx) xxxxxxx">+91 (xxx) xxxxxxx</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <Link to='/'><img className='btm_ftr_logo' src={logo} alt="" /></Link>
                    <div className="get-touch">
                        <div>Get in touch</div>
                        <div className="social">
                            <a href="https://www.facebook.com/Creationsoul"><FaFacebookF /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="https://www.linkedin.com/company/97397466/admin/feed/posts"><FaLinkedinIn /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="copyright">
                        <div>© 2021 Creationsoul. All Rights Reserved</div>
                        <Link to='/privacy-and-policy'>Privacy Policy</Link>
                        <Link to='/terms-and-services'>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
