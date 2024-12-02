import React from "react";
import '../style/_AboutMe.scss';
import {NavLink} from "react-router-dom";
export const AboutMe = () =>{
    return (
        <div>
            <section className='about'>
                <div className='about-container'>
                    <div className='about-photo'>
                        <img src='/public/Logo.jpg' alt='Dawid Grochowski'/>
                    </div>
                    <div className='about-text'>
                        <h2>About Me</h2>
                        <p>
                            Hello! My name is <strong>Dawid Grochowski</strong>. I'm a passionate
                            programmer with experience in JavaScript , React, and web development. I enjoy
                            creating dynamic and user-friendly applications , constantly learning , and improving my skills.
                        </p>
                        <h3>Skills:</h3>
                        <ul>
                            <li>JavaScript (ES6+), React, JSX</li>
                            <li>HTML5, CSS3/SCSS</li>
                            <li>High-frequency packaging research (mm-wave, THz)</li>
                            <li>Teamwork and problem-solving</li>
                        </ul>
                        <h3>Goals:</h3>
                        <p>
                            My goal is to become a highly skilled web developer , create innovative projects,
                            and collaborate with talented teams to make a positive impact in the tech industry .
                        </p>
                    </div>
                </div>

            </section>
        </div>

    );
}