import React from "react";
import {Link} from "react-router-dom";
import '../style/_Navbar.scss';

export const Navbar = () => {
    return(
        <>
            <nav className='navbar'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About me</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </nav>

        </>
    )
}