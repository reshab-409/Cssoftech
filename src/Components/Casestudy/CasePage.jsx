import React, { useEffect, useRef, Suspense } from 'react';
import './Style.css';
import man from '../img/man-smiling.png';
import color from '../img/Rectangle 47.png';
import blueArrow from '../img/blueArrow.svg';
// import Projects from '../CommonComponents/Projects';
import Quote from '../CommonComponents/Quote';
import PopUpForm from '../CommonComponents/PopUpForm/PopUpForm';
import { Triangle } from 'react-loader-spinner';
const Projects = React.lazy(() => import('../CommonComponents/Projects'));

const CasePage = () => {
    const childRef = useRef(null);

    const popup = () => {
        childRef.current.Open();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="banner1">
                <div className="container1">
                    <div className="banner-content1">
                        <h1>Exploring Impactful Case Studies</h1>
                        <h2>
                            Unlocking Success Stories
                        </h2>
                        <img src={color} className='color1' alt='color' />
                        <p>
                            Discover how our clients conquered challenges, embraced
                            innovation, and achieved remarkable outcomes in these
                            insightful case studies
                        </p>
                        <button onClick={popup} className="b bg-reverse">Let's Talk</button>
                    </div>
                    <div className="image1">
                        <img src={man} alt="" />
                    </div>
                </div>
            </section>
            <PopUpForm ModalFunction={childRef} />
            {/* Listing */}
            <div className="listing">
                <div className="container2">
                    <img src={color} className='color2' alt='color' />
                    <h2>Some of our proud <span>projects</span> that make us stand out</h2>
                    <Suspense fallback={<Triangle
                        visible={true}
                        height="80"
                        width="80"
                        color="#002EF4"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{ margin: 'auto', marginTop: '5rem' }}
                        wrapperClass=""
                    />}>
                        <Projects shouldSlice={true}/>
                    </Suspense>
                    <button className='all'>View More <img src={blueArrow} alt='arrow' /></button>
                </div>
            </div>

            {/* Quote */}
            <Quote />
        </>
    );
};

export default CasePage;
