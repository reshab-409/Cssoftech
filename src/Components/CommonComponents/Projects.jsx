import React from 'react';
import Data from '../DummyData/ProjectsData';
import Arrow from '../img/Arrow 1.svg';
import { Link } from 'react-router-dom';

const Projects = ({ shouldSlice }) => {
    const projectsData = shouldSlice ? Data : Data.slice(0, 3);
    return (
        <div className="projects">
            {projectsData.map((data, index) => {
                return (
                    <div key={index} className="main">
                        <img src={data.pic} className='proPic' alt="proPic" />
                        <div className="details">
                            <h2>{data.projectName}</h2>
                            <p>{data.details}</p>
                            <Link to='/case-study-details-page'><button className='b bg-reverse'>Learn more <img src={Arrow} alt='arrow' /></button></Link>
                        </div>
                    </div>
                )

            })}
        </div>
    );
};

export default Projects;
