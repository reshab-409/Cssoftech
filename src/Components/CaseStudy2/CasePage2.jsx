import React, { Suspense, useEffect } from 'react';
import color from '../img/Rectangle 47.png';
import './Style.css';
import challenges from '../img/challenges.png';
import dot from '../img/listDot.svg';
import feedImg from '../img/feedbackimg.png';
import Quote from '../CommonComponents/Quote';
import DropDown from '../CommonComponents/DropDown';
import blueArrow from '../img/blueArrow.svg';
import html from '../img/HTML.png';
import css from '../img/CSS.png';
import wordpress from '../img/Wordpress.png';
import sql from '../img/SQL.png';
import MoreCaseStudies from '../CommonComponents/MoreCaseStudies';
import Feedback from '../CommonComponents/Feedback';
import { Link } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
const Projects = React.lazy(() => import('../CommonComponents/Projects'));

const CasePage2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="banner2">
                <div className="container3">
                    <div className="banner-content2">
                        <h1> A WEBSITE </h1>
                        <h2>FOR AN ORGANIC</h2>
                        <h3> FOOD BRAND  </h3>
                    </div>
                </div>
            </section>

            {/* Next section */}
            <div className="sec2">
                <div className="lft">
                    <img src={color} alt="color" />
                    <h2> Overview</h2>
                    <p>Our journey at [Your Food Brand] has been nothing short
                        of a flavorful adventure, and we're excited to share
                        the behind the-scenes tale of our culinary prowess.
                        In this case study witness how we transformed
                        mere concepts into a thriving online haven for
                        food enthusiasts.</p>
                    <small>The scope of project</small>
                    <div className="btns">
                        <button>
                            Research
                        </button>
                        <button>
                            Design
                        </button>
                        <button>
                            Development
                        </button>
                    </div>
                </div>
                <div className="rht">
                </div>
            </div>


            {/* Next section */}

            <div className="challenges">
                <div className="lft">
                    <h2>Challenges</h2>
                    <ul>
                        <li><img src={dot} alt='dot' />Capturing the visual essence of food through images and maintaining
                            a consistent aesthetic can be challenging</li>
                        <li><img src={dot} alt='dot' />Ensuring a seamless experience on various devices, especially
                            mobile phones, presents a significant development challenge.</li>
                        <li><img src={dot} alt='dot' />Integrating a smooth and intuitive online ordering system requires
                            careful coordination with backend systems</li>
                        <li><img src={dot} alt='dot' />Regularly updating menu items, promotions, and culinary
                            content without technical expertise can be daunting</li>
                    </ul>
                </div>
                <div className="rht">
                    <img src={challenges} className='cngs' alt="challenge" />
                </div>
            </div>

            {/* Next section */}
            <DropDown fstname="Our goal" sndname="strategy" rdname="solutions" />

            {/* Next section */}
            <div className="feedback">
                <h2><img src={color} alt="color" />Clients Feedback</h2>
                <div className="txts">
                    <img src={feedImg} alt="feedImg" className='feedImg' />
                    <div className="details">
                        <p>I hope this message finds you well. I've been using [Your Feed Website] for a while now, and I wanted to share my thoughts and feedback with you. Overall, I appreciate the effort you've put into creating a platform that meets my needs for staying updated and connected. Here are my observations:</p>
                        <small>-Jeo Stanlee</small>
                    </div>
                </div>
            </div>

            {/* Next section */}
            <div className="webLink">
                <h2>Website link</h2>
                <a href=''>https://cssoftech.com</a>
            </div>


            {/* Next section */}
            <h2 className='p'>Testimonial</h2>
            <h3 className='h1'>How our services bring us success</h3>
            {/* <Slide /> */}
            <Feedback />


            {/* Next section */}
            <div className="center">
                <h2><img src={color} alt="color" />Technology</h2>
                <h3>It is complete a <span>WordPress</span> website we developed</h3>
            </div>
            <div className="technology">
                <h2>Technology we used</h2>
                <div className="boxs">
                    <div className="box">
                        <img src={wordpress} alt={wordpress} />
                    </div>
                    <div className="box">
                        <img src={css} alt={css} />
                    </div>
                    <div className="box">
                        <img src={html} alt={html} />
                    </div>
                    <div className="box">
                        <img src={sql} alt={sql} />
                    </div>
                </div>
            </div>

            {/* Next section */}
            <MoreCaseStudies />

            {/* Next section */}
            <div className="projects_main">
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


            {/* Quote */}
            <Quote />


        </>
    );
};

export default CasePage2;
