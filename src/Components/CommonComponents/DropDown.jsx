import React, { useState } from 'react';
import downTick from '../img/downTick.svg';

const DropDown = ({ fstname, sndname, rdname }) => {
    const [openSection, setOpenSection] = useState(null);

    const handleToggle = (sectionId) => {
        setOpenSection(openSection === sectionId ? null : sectionId);
    };

    return (
        <div className="accordion">
            <div>
                <input
                    type="checkbox"
                    id="section1"
                    className="accordion__input"
                    checked={openSection === 'section1'}
                    onChange={() => handleToggle('section1')}
                />
                <label htmlFor="section1" className="accordion__label">
                    {fstname} <img src={downTick} className="dt" alt="downtick" />
                </label>
                <div className={`accordion__content ${openSection === 'section1' ? 'open' : ''}`}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, earum, magnam? Alias
                        error, placeat! Accusamus accusantium alias eum iure laborum odit porro quaerat? Animi enim
                        id labore officiis quam sint.
                    </p>
                </div>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="section2"
                    className="accordion__input"
                    checked={openSection === 'section2'}
                    onChange={() => handleToggle('section2')}
                />
                <label htmlFor="section2" className="accordion__label">
                    {sndname} <img src={downTick} className="dt" alt="downtick" />
                </label>
                <div className={`accordion__content ${openSection === 'section2' ? 'open' : ''}`}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, earum, magnam? Alias
                        error, placeat! Accusamus accusantium alias eum iure laborum odit porro quaerat? Animi enim
                        id labore officiis quam sint.
                    </p>
                </div>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="section3"
                    className="accordion__input"
                    checked={openSection === 'section3'}
                    onChange={() => handleToggle('section3')}
                />
                <label htmlFor="section3" className="accordion__label">
                    {rdname} <img src={downTick} className="dt" alt="downtick" />
                </label>
                <div className={`accordion__content ${openSection === 'section3' ? 'open' : ''}`}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, earum, magnam? Alias
                        error, placeat! Accusamus accusantium alias eum iure laborum odit porro quaerat? Animi enim
                        id labore officiis quam sint.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DropDown;
