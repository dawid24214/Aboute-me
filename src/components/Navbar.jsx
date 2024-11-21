import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import '../style/_Navbar.scss';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return(
        <>
            <nav className='navbar'>
                <div className='logo'>Dawid Grochowski</div>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><NavLink to='/' activeClassName='active' onClick={toggleMenu}>Home</NavLink></li>
                    <li><NavLink to='/about' activeClassName='active' onClick={toggleMenu}>About me</NavLink></li>
                    <li><NavLink to='/projects' activeClassName='active' onClick={toggleMenu}>Projects</NavLink></li>
                    <li><NavLink to='/portfolio' activeClassName='active' onClick={toggleMenu}>Portfolio</NavLink></li>
                    <li><NavLink to='/contact' activeClassName='active' onClick={toggleMenu}>Contact</NavLink></li>
                </ul>
            </nav>

        </>
    );
}