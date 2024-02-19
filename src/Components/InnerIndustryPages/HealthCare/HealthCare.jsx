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
import Projects from '../../CommonComponents/Projects';
import Service1 from '../../assets/Health_bnr.png';
import toprated from '../../assets/Health_lwrbnr.png'
import Quote from '../../CommonComponents/Quote';
import './Style.css';
import Banner from '../../CommonComponents/ServiceBanner/Banner';
import CustomSoftwear from './CustomSoftwear';
import { Link } from 'react-router-dom';

const HealthCare = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
    const List = [
        {
            name: 'Frontend',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Database',
            img: img2,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'mobile development',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Backend',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Power platform,',
            img: img4,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Website Migration',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        }
    ];
    return (
        <div>
            <Banner bnrClass='color' Heading='Optimizing Patient Care' SubHeading='Healthcare Software Solutions for Seamless Integration and Enhanced Medical Management' Pic={Service1} />
            <TopRated Heading='Custom Healthcare Software Development Company' SubHeading='At Creationsoul, we prioritize the well-being of our clients through innovative Health Services that blend cutting-edge technology with personalized care. Our comprehensive health solutions leverage IT advancements to enhance patient experiences, streamline healthcare operations, and promote overall wellness.' Pic={toprated} />
            <CustomSoftwear />
            <Listing Heading='We create Health Software for any platform' SubHeading='We create web applications that are responsive & compatible with all major browsers.' Display='none' List={List} />
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

export default HealthCare;
