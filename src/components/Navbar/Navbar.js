import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(window.location.pathname.slice(1));

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <Link className="navbar-brand" to="/">Portfolio</Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${activeLink === '' ? 'active': ''}`} to="/" onClick={() => setActiveLink('')}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${activeLink === 'about' ? 'active': ''}`} to="/about" onClick={() => setActiveLink('about')}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${activeLink === 'skills' ? 'active': ''}`} to="/skills" onClick={() => setActiveLink('skills')}>Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${activeLink === 'projects' ? 'active': ''}`} to="/projects" onClick={() => setActiveLink('projects')}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${activeLink === 'theory' ? 'active': ''}`} to="/theory" onClick={() => setActiveLink('theory')}>Theory Questions</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
