import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import ISO from '../assets/ISO_9001-2015_w.jpg';
import NSIC from '../assets/newNS.png';
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
                        <h2>Company</h2>
                        <div className="toggle-menu">
                            <Link to='/' onClick={handleLinkClick}>Why Choose Us?</Link>
                            <Link>Certifications</Link>
                            <Link to='/about'>About</Link>
                        </div>
                    </div>
                    <div className="footer-block">
                        <h2>Our Services</h2>
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
                        <h2>Industries</h2>
                        <div className="toggle-menu">
                            <Link to='/healthcare'>Health Care</Link>
                            <Link to='/food-beverages'>Food & Beverages</Link>
                            <Link to='/real-estate'>Real Estate</Link>
                            <Link to='/education-e-learning'>Education & E-learning</Link>
                            <Link to='/retail-ecommerce'>Retail & E-commerce</Link>
                            <Link to='/logistic-transportation'>Logistic & transportation</Link>
                        </div>
                    </div>
                    <div className="footer-block">
                        <h2>Contact Us</h2>
                        <div className="toggle-menu">
                            <address>5 Sreema road, Dum dum cantonment, kolkata, India</address>
                            <a href="mailto:info@cssoftech.com">info@cssoftech.com</a>
                            <a href="tel:+91 7003990798">Call - +91 7003990798</a>
                            <a href="https://wa.me/7003990798"><FaWhatsapp /> - Chat on WhatsApp</a>
                        </div>
                    </div>
                </div>
                <div className="partner">
                    <img className='partner-logo' src={NSIC} alt="NSIC" />
                    <img className='partner-logo' src={ISO} alt="ISO" />
                </div>
                <div className="footer-bottom">
                    <Link aria-label="logo" to='/'><img className='btm_ftr_logo' src={logo} alt="" /></Link>
                    <div className="get-touch">
                        <div>Get in touch</div>
                        <div className="social">
                            <a aria-label="Facebook" href="https://www.facebook.com/Creationsoul"><FaFacebookF /></a>
                            <a aria-label="Twitter" href="#"><FaXTwitter /></a>
                            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/97397466/admin/feed/posts"><FaLinkedinIn /></a>
                            <a aria-label="Youtube" href="#"><FaYoutube /></a>
                            <a aria-label="Instagram" href="#"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="copyright">
                        <div>© 2024 Creationsoul. All Rights Reserved</div>
                        <Link to='/privacy-and-policy'>Privacy Policy</Link>
                        <Link to='/terms-and-services'>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
