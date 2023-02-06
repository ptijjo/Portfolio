import React from 'react';
import { NavLink } from 'react-router-dom';
import Mouse from '../Components/Mouse';

const NotFound = () => {
    return (
        <div className="notFound">
            <Mouse />
            <div className="notFound-content">
                <h2> Erreur 404</h2>
                <NavLink to="/">
                    <h3 className='hover'>Retour à l'accueil <i className='fas fa-home' /></h3>
                </NavLink>
            </div>
        </div>

    );
};

export default NotFound;