import React, { useState } from 'react';
import { data } from '../Data/data';

const Projet = (props) => {
    const num = props.num;

    const [projet] = useState(data[num])

    return (
        <div className="project-main">
            <div className="project-content">
                <h1>{projet.titre}</h1>
                <ul className="languages">
                    {projet.stack.map((item, index) =>
                        <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div className="img-content">
                <div className="img-container hover">
                    <span>
                        <h3>{projet.titre}</h3>
                        <p>{projet.infos}</p>
                    </span>
                    <img src={projet.image} alt={projet.titre} className="img" />
                </div>
                <div className="button-container">
                    <a href={projet.url} target="_blank" rel="noopener noreferrer" className='hover'>
                        <span className="button"> voir le site</span>
                    </a>
                    <a href={projet.github} target="_blank" rel="noopener noreferrer" className='hover'>
                        <span className="button"> voir le github</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projet;