import React from 'react';
import Data from '../DummyData/ProjectsData';
import Arrow from '../img/Arrow 1.svg';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="projects">
            {Data.map((data, index) => {
                return (
                    <div key={index} className="main">
                        <img src={data.pic} className='proPic' alt="proPic" />
                        <div className="details">
                            <p>{data.projectName}</p>
                            <small>{data.details}</small>
                            <Link to='/case-study-details-page'><button className='b bg-reverse'>Learn more <img src={Arrow} alt='arrow' /></button></Link>
                        </div>
                    </div>
                )

            })}
        </div>
    );
};

export default Projects;
