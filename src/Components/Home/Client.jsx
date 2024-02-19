import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import hexa from '../assets/hexa.jpg';
import amara from '../assets/amara.jpg';
import lorem from '../assets/lorem.jpg';
import aven from '../assets/aven.jpg';
import light from '../assets/light-ai.jpg';
import './Style.css';

const Client = () => {

    return (
        <section className="section client">
            <div className="container">
                <h5>Some of our valuable clients</h5>
                {/* <OwlCarousel
                    className='owl-carousel owl-centered'
                    items={5}
                    loop
                    nav={false}
                    responsive={{
                        0: { items: 2 },
                        600: { items: 2 },
                        768: { items: 3 },
                        992: { items: 4 },
                        1200: { items: 5 },
                    }}
                > */}

                <div className="client_stack">
                    <div className="item1"><img src={hexa} alt="" /></div>
                    <div className="item1"><img src={aven} alt="" /></div>
                    <div className="item1"> <img src={light} alt="" /></div>
                    <div className="item1"><img src={amara} alt="" /></div>
                    <div className="item1"><img src={lorem} alt="" /></div>
                    <div className="item1"><img src={hexa} alt="" /></div>
                    <div className="item1"><img src={aven} alt="" /></div>
                    <div className="item1"> <img src={light} alt="" /></div>
                    <div className="item1"><img src={amara} alt="" /></div>
                    <div className="item1"><img src={lorem} alt="" /></div>
                    <div className="item1"><img src={hexa} alt="" /></div>
                    <div className="item1"><img src={aven} alt="" /></div>
                </div>

                {/* </OwlCarousel> */}
                <div className="client-logo">
                    {/* <div className="owl-carousel owl-theme client-slider row">
                            <div className="item"><img src="./hexa.jpg" alt="" /></div>
                            <div className="item"><img src="./aven.jpg" alt="" /></div>
                            <div className="item"> <img src="./light-ai.jpg" alt="" /></div>
                            <div className="item"><img src="./amara.jpg" alt="" /></div>
                            <div className="item"><img src="./lorem.jpg" alt="" /></div>
                        </div> */}
                </div>
                <div className="sort-info">
                    <h3>Phasellus ipsum sapien, fermentum eu nibh</h3>
                    <p>
                        Sed a dolor id est porttitor euismod. Proin elementum ipsum eget mi
                        blandit euismod. Fusce facilisis tortor leo, nec bibendum lectus
                        maximus eu. Nulla facilisi. Phasellus ipsum sapien, fermentum eu
                        nibh ac, tempus volutpat velit. Vestibulum rhoncus sit amet ipsum
                        sed facilisis. Sed vehicula risus a tincidunt blandit. Sed a dolor
                        id est porttitor euismod. Proin elementum ipsum eget mi blandit
                        euismod. Fusce facilisis tortor leo, nec bibendum lectus maximus eu.
                        Nulla facilisi. Phasellus ipsum sapien, fermentum eu nibh ac, tempus
                        volutpat velit. Vestibulum rhoncus sit amet ipsum sed facilisis. Sed
                        vehicula risus a tincidunt blandit.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Client
