import React, { useEffect } from 'react';
import TopRated from '../../CommonComponents/Top_rated/TopRated';
import '../../IT Staff Augmentation Services/Style.css';
import img1 from '../../assets/img/listpic1.png';
import img2 from '../../assets/img/listpic3.png';
import img3 from '../../assets/img/listpic5.png';
import img4 from '../../assets/img/listpic4.png';
import Listing from '../../CommonComponents/ServicesListing/Listing'
import Hiring from '../../CommonComponents/Hiring/Hiring';
import blueArrow from '../../assets/img/blueArrow.svg';
import Feedback from '../../CommonComponents/Feedback';
import MoreCaseStudies from '../../CommonComponents/MoreCaseStudies';
import service4 from '../../assets/Service4_lwrbnr.png';
import servicebnr from '../../assets/service4_bnr.png';
import Projects from '../../CommonComponents/Projects';
import Service4_dev from '../../assets/service4-dev.png';
import Quote from '../../CommonComponents/Quote';
import Banner from '../../CommonComponents/ServiceBanner/Banner';
import Industries from '../../CommonComponents/Industries_served/Industries';
import DevelopementService from '../../CommonComponents/Developement_services/DevelopementService';
import { Link } from 'react-router-dom';

const MagentoDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const List = [
        {
            name: 'Custom eCommerce Development',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Open-Source Customization',
            img: img2,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Mobile App Development',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'MVP Development',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Migration/Upgradation',
            img: img4,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Issues & Bug Fixes',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        }
    ];
    const ListOfDevelopement = [
        {
            name: 'Open Source',
            img: img2,
            details: 'Magento, Woocommerce, OpenCart'
        },
        {
            name: 'Web Application',
            img: img4,
            details: 'Angular, React, Vue.js, Node, Laravel,'
        },
        {
            name: 'Hosted Platform',
            img: img4,
            details: 'Shopify, BigCommerce'
        },
        {
            name: 'Database',
            img: img2,
            details: 'MySQL, MongoDB, PostgreSQL, Firebase'
        }
    ];

    return (
        <div>
            <Banner Heading='E-Commerce Development Services' SubHeading='Designed For Entrepreneurs' Pic={servicebnr} />
            <TopRated Heading='eCommerce  Development Company' SubHeading='Welcome to Creationsoul – Your Gateway to Seamless eCommerce Excellence! At Creationsoul, we bring a fusion of innovation and technology to redefine your online retail experience. As a leading IT company, we specialize in eCommerce Development, offering a comprehensive suite of services to elevate your business in the digital marketplace.' Pic={service4} />
            <Listing Heading='Business-Friendly' SubHeading='Mobile App Development Services for Different Platforms' Display='none' List={List} />
            <DevelopementService className="s_listing1" List={ListOfDevelopement} Pic={Service4_dev} Heading='E-Commercedevelopment at creationsoul' SubHeading='We made eCommerce website for many platforms' />
            <Industries />
            <Hiring />
            <Feedback />
            <MoreCaseStudies />
            <div className="cont_project">
                <Projects />
                <Link to='/case-study'><button className='all'>View More <img src={blueArrow} alt='arrow' /></button></Link>
            </div>
            <Quote />
        </div>
    );
};

export default MagentoDevelopment;
