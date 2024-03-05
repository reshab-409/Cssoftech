import React, { Suspense, useEffect } from 'react';
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
import service3 from '../assets/Service3_lwrbnr.png';
import servicebnr from '../assets/service3_bannerTop.png';
// import Projects from '../CommonComponents/Projects';
import { Triangle } from 'react-loader-spinner'
import servDev from '../assets/service3_dev.png';
import Quote from '../CommonComponents/Quote';
import Banner from '../CommonComponents/ServiceBanner/Banner';
import Industries from '../CommonComponents/Industries_served/Industries';
import DevelopementService from '../CommonComponents/Developement_services/DevelopementService';
import { Link } from 'react-router-dom';
const Projects = React.lazy(() => import('../CommonComponents/Projects'));

const WebDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const List = [
        {
            name: 'Custom application development',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'E-commerce',
            img: img2,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Application Maintenance',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'API Development',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'CMS Development',
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
            name: 'Front-End Technologies',
            img: img2,
            details: 'Angular, React, Vue.js, Bootstrap'
        },
        {
            name: 'Backend-Technologies',
            img: img2,
            details: 'PHP, Laravel, Node, Python, Java, Dot Net, MySQL, MongoDB'
        }
    ];
    return (
        <div>
            <Banner Heading='Custom Web App Development Services' SubHeading='Designed For Entrepreneurs' Pic={servicebnr} />
            <TopRated Heading='Custom Web App Development Company' SubHeading='At Creationsoul, we take pride in our role as a leading IT company dedicated to transforming your online presence through cutting-edge web development services. Our team of skilled developers is committed to bringing your vision to life and ensuring that your website not only meets but exceeds industry standards.' Pic={service3} />
            <Listing Heading='Business-Friendly' SubHeading='Mobile App Development Services for Different Platforms' Display='none' List={List} />
            <DevelopementService className="s_listing" List={ListOfDevelopement} Pic={servDev} Heading='Web app development at creationsoul' SubHeading='We made mobile app for both android and IOS' />
            <Industries />
            <Hiring />
            <Feedback />
            <MoreCaseStudies />
            <div className="cont_project">
                <Suspense fallback={<Triangle
                        visible={true}
                        height="80"
                        width="80"
                        color="#002EF4"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{ margin: 'auto', marginTop: '5rem' }}
                        wrapperClass=""
                    />}>
                    <Projects />
                </Suspense>
                <Link to='/case-study'><button className='all'>View More <img src={blueArrow} alt='arrow' /></button></Link>
            </div>
            <Quote />
        </div>
    );
};

export default WebDevelopment;
