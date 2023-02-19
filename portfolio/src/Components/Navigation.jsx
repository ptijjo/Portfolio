import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                    accueil
                </NavLink></li>
                <li className="nav-portfolio">
                    portfolio
                    <ul className="nav-projects">
                        <li><NavLink to="/projet-1" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            projet-1
                        </NavLink></li>
                        <li><NavLink to="/projet-2" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            projet-2
                        </NavLink></li>
                        <li><NavLink to="/projet-3" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            projet-3
                        </NavLink></li>
                        <li><NavLink to="/projet-4" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            projet-4
                        </NavLink></li>
                        <li><NavLink to="/projet-5" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            projet-5
                        </NavLink></li>

                    </ul>
                </li>

                <li><NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                    contact
                </NavLink></li>

            </ul>
        </div>
    );
};

export default Navigation;