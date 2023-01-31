import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/"> <li> accueil</li></NavLink>
                <div>
                    Portfolio
                    <ul>
                        <NavLink to="/projet-1"> <li> projet-1</li></NavLink>
                    </ul>
                </div>
                <NavLink to='/contact'> <li>contact</li></NavLink>

            </ul>
        </div>
    );
};

export default Navigation;