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
import service4 from '../assets/Softwear_lwrbnr.png';
import servicebnr from '../assets/Softwear_bnr.png';
// import Projects from '../CommonComponents/Projects';
import Service5_dev from '../assets/Softwear__dev.png';
import Quote from '../CommonComponents/Quote';
import Banner from '../CommonComponents/ServiceBanner/Banner';
import Industries from '../CommonComponents/Industries_served/Industries';
import DevelopementService from '../CommonComponents/Developement_services/DevelopementService';
import { Link } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
const Projects = React.lazy(() => import('../CommonComponents/Projects'));


const SoftwearDevelopement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const List = [
        {
            name: 'SaaS Application ',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Custom CMS',
            img: img2,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Custom CRM',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'eCommerce Application',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Mobile Apps',
            img: img4,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Migration & Update',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        }
    ];
    const ListOfDevelopement = [
        {
            name: 'Mobile Apps',
            img: img2,
            details: 'React Native, Flutter, Kotlin, Swift'
        },
        {
            name: 'Database',
            img: img4,
            details: 'MySQL, MongoDB, PostgreSQL, Firebase'
        },
        {
            name: 'Web Application',
            img: img4,
            details: 'Angular, React, Vue.js, Node, Laravel,'
        }
    ];
    return (
        <div>
            <Banner Heading='Software Development Services' SubHeading='Designed For Entrepreneurs' Pic={servicebnr} />
            <TopRated Heading='Software Development Company' SubHeading='Welcome to Creationsoul, where innovation converges with precision in the realm of Software Development. As a leading IT company, we take pride in offering bespoke software solutions that elevate businesses to new heights. Our team at Creationsoul is dedicated to crafting cutting-edge software tailored to your unique needs, ensuring efficiency, scalability, and a seamless user experience.' Pic={service4} />
            <Listing Heading='Business-Friendly' SubHeading='Software Development Services for Different Platforms' Display='none' List={List} />
            <DevelopementService className="s_listing1" List={ListOfDevelopement} Pic={Service5_dev} Heading='Software Development at creationsoul' SubHeading='Our custom software development services are designed to address your specific needs' />
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
                <Link to='/case-study'> <button className='all'>View More <img src={blueArrow} alt='arrow' /></button></Link>
            </div>
            <Quote />
        </div>
    );
};

export default SoftwearDevelopement;
