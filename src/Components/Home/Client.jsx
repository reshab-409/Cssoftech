import React from 'react';
import hexa from '../assets/hexa.jpg';
import amara from '../assets/amara.jpg';
import lorem from '../assets/lorem.jpg';
import aven from '../assets/aven.jpg';
import light from '../assets/light-ai.jpg';
import Sddm from '../assets/south-dum-dum.png';
import grse from '../assets/GRSE.png';
import housing from '../assets/Housing.png';
import lackland from '../assets/Lackland-dorm.png';
import mJunction from '../assets/mjunction_logo.png'
import MAZAGONDOCK from '../assets/MAZAGONDOCK.png';
import mySeema from '../assets/MY-SEEMA.png';
import './Style.css';

const Client = () => {

    return (
        <section className="section client">
            <div className="container">
                <h2>Some of our valuable clients</h2>
                <div className="client_stack">
                    {/*  */}
                    <div className="item1"><img src={grse} alt="" /></div>
                    <div className="item1"><img src={MAZAGONDOCK} alt="" /></div>
                    <div className="item1"><img src={Sddm} alt="" /></div>
                    <div className="item1"><img src={mJunction} alt="" /></div>
                    <div className="item1"><img src={mySeema} alt="" /></div>
                    <div className="item1"><img src={housing} alt="" /></div>
                    <div className="item1"> <img src={lackland} alt="" /></div>
                    {/*  */}
                    <div className="item1"><img src={hexa} alt="" /></div>
                    <div className="item1"><img src={aven} alt="" /></div>
                    <div className="item1"> <img src={light} alt="" /></div>
                    <div className="item1"><img src={amara} alt="" /></div>
                    <div className="item1"><img src={lorem} alt="" /></div>
                </div>

                <div className="client-logo">
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
