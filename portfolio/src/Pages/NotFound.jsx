import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFound_content'>
                <h2> Erreur 404 </h2>
                <NavLink to="/">
                    <h3>
                        Retour à l'accueil
                        <i className="fa-solid fa-house"></i>
                    </h3>
                </NavLink>
            </div>
        </div>

    );
};

export default NotFound;