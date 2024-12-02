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
                <div className='logo'>
                    <img src='/public/Logo.jpg' alt='Dawid Grochowski'/>
                </div>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><NavLink to='/'
                                 className={({isActive}) => (isActive ? 'active' : '')}
                                 onClick={toggleMenu}>Home</NavLink></li>
                    <li><NavLink to='/about'
                                 className={({isActive}) => (isActive ? 'active' : '')}
                                 onClick={toggleMenu}>About me</NavLink></li>
                    <li><NavLink to='/projects'
                                 className={({isActive}) => (isActive ? 'active' : '')}
                                 onClick={toggleMenu}>Projects</NavLink></li>
                    <li><NavLink to='/portfolio'
                                 className={({isActive}) => (isActive ? 'active' : '')}
                                 onClick={toggleMenu}>Portfolio</NavLink></li>
                    <li><NavLink to='/contact'
                                 className={({isActive}) => (isActive ? 'active' : '')}
                                 onClick={toggleMenu}>Contact</NavLink></li>
                    <li><NavLink to='/SnakeGame'
                                 className={({isActive}) => (isActive ? 'active' : '')}
                                 onClick={toggleMenu}>SnakeGame</NavLink></li>
                </ul>
            </nav>

        </>
    );
}