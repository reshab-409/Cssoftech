import React, { Suspense, lazy, useCallback, useRef } from 'react';
import { Triangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
const PopUpForm = lazy(() => import('../CommonComponents/PopUpForm/PopUpForm'));

const Banner = () => {
    const childRef = useRef(null);

    const popup = useCallback(() => {
        childRef.current.Open();
    }, [childRef]);


    return (
        <div className='homepage'>
            <section className="banner">
                <div className="container">
                    <div className="banner-content">
                        <h2>One Company. Many Divisions.</h2>
                        <p>
                            End-to-end digital marketing division focused on driving more users,
                            leads and sales.
                        </p>
                        <Link onClick={popup} className="button-primary">Let's Talk</Link>
                    </div>
                </div>
            </section>
            <Suspense fallback={<Triangle
                visible={true}
                height="80"
                width="80"
                color="#002EF4"
                ariaLabel="triangle-loading"
                wrapperStyle={{ margin: '5rem auto' }}
                wrapperClass=""
            />}>
            <PopUpForm ModalFunction={childRef} />
            </Suspense>
        </div>
    );
};

export default Banner;
