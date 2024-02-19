import React, { useEffect } from 'react';
import TopRated from '../CommonComponents/Top_rated/TopRated';
import '../IT Staff Augmentation Services/Style.css';
import img1 from '../assets/img/listpic1.png';
import img2 from '../assets/img/listpic3.png';
import img3 from '../assets/img/listpic5.png';
import img4 from '../assets/img/listpic4.png';
import Listing from '../CommonComponents/ServicesListing/Listing'
import Hiring from '../CommonComponents/Hiring/Hiring';
import blueArrow from '../assets/img/blueArrow.svg';
import Feedback from '../CommonComponents/Feedback';
import MoreCaseStudies from '../CommonComponents/MoreCaseStudies';
import mobile from '../assets/mobile_dev.png';
import Projects from '../CommonComponents/Projects';
import Service1 from '../assets/img/Service1.png';
import toprated from '../assets/TopratedImg2.png';
import Quote from '../CommonComponents/Quote';
import Banner from '../CommonComponents/ServiceBanner/Banner';
import Industries from '../CommonComponents/Industries_served/Industries';
import DevelopementService from '../CommonComponents/Developement_services/DevelopementService';
import { Link } from 'react-router-dom';

const MobileAppDevelopement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const List = [
        {
            name: 'App Designing',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Custom App Development',
            img: img2,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Web to App',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Migration & Update',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Custom App Development,',
            img: img4,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Maintenance',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        }
    ];
    const ListOfDevelopement = [
        {
            name: 'IOS App Development',
            img: img2,
            details: 'Front-end: Swift, Objective-C Back-end: Node, Laravel, Firebase, Python, Java, Dot Net, PHP, GraphQL'
        },
        {
            name: 'Android -App Development',
            img: img2,
            details: 'Front-end: Swift, Objective-C Back-end: Node, Laravel, Firebase, Python, Java, Dot Net, PHP, GraphQL'
        }
    ];
  
    return (
        <div>
            <Banner Heading='Custom Mobile App Development Services' SubHeading='Designed For Entrepreneurs' Pic={Service1} />
            <TopRated Heading='Mobile App Developement' SubHeading='At Creationsoul, we bring your digital ideas to life through our expert Mobile App Development Services. With a focus on innovation and user-centric design, we craft bespoke mobile applications that cater to your unique business objectives.From concept to deployment, our seasoned team of developers ensures seamless functionality and an engaging user experience across iOS and Android platforms.' Pic={toprated} />
            <Listing Heading='Business-Friendly' SubHeading='Mobile App Development Services for Different Platforms' Display='none' List={List} />
            <DevelopementService className="s_listing" List={ListOfDevelopement} Pic={mobile} Heading='Mobile app development at creationsoul' SubHeading='We made mobile app for both android and IOS' />
            <Industries/>
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

export default MobileAppDevelopement;
