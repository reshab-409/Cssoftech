import React, { Suspense, useEffect } from 'react';
import ITStaffAugmentationServices from '../CommonComponents/Our On-Demand IT Staff Augmentation Services/IT Staff Augmentation Services';
import TopRated from '../CommonComponents/Top_rated/TopRated';
import './Style.css';
import img1 from '../assets/img/listpic1.png';
import img2 from '../assets/img/listpic3.png';
import img3 from '../assets/img/listpic5.png';
import img4 from '../assets/img/listpic4.png';
import Listing from '../CommonComponents/ServicesListing/Listing'
import Hiring from '../CommonComponents/Hiring/Hiring';
import blueArrow from '../assets/img/blueArrow.svg';
import Helped from '../Helped_Businesses/Helped';
import StaffAugmentation from '../Staff Augmentation/Staff Augmentation';
import Feedback from '../CommonComponents/Feedback';
import toprated from '../assets/img/topratedimg.png';
import MoreCaseStudies from '../CommonComponents/MoreCaseStudies';
// import Projects from '../CommonComponents/Projects';
import Quote from '../CommonComponents/Quote';
import { Link } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';

const Projects = React.lazy(() => import('../CommonComponents/Projects'));

const ITStaffAugmentationServicesMain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const List = [
        {
            name: 'PHP Development',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'QA & Testing',
            img: img2,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'CMS & eCommerce',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'Digital Marketing',
            img: img1,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'mobile development',
            img: img4,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        },
        {
            name: 'MEAN Stack',
            img: img3,
            details: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
        }
    ];
    return (
        <div>
            <ITStaffAugmentationServices />

            <TopRated Heading='On-Demand IT Staff Augmentation Company' SubHeading='At Creationsoul, we redefine your IT capabilities through Staff Augmentation, seamlessly integrating skilled professionals into your team. Our IT Staff Augmentation services empower your company with on-demand expertise, allowing you to scale your workforce efficiently.' Pic={toprated} />

            <Listing Heading='Our On-Demand IT Staff Augmentation Services' SubHeading='Our IT Staff Augmentation Services will help you meet fluctuating demands. You will no longer say “NO” to unpredictable new projects or new tech skills.' Display='none' List={List} />

            <Hiring />
            <Helped />
            <StaffAugmentation />
            <p className='p'>Testimonial</p>
            <h1 className='h1'>How our services bring us success</h1>
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

export default ITStaffAugmentationServicesMain;
