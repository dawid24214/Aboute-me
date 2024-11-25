import '../style/_HeroSection.scss';
import React from "react";

export  const HeroSection = () => {
    return (
        <>
            <section className="home">
                <div className="hero">
                    <h1>Welcome to My World</h1>
                    <p>
                        Hi, I'm <strong>Dawid Grochowski</strong>. A developer passionate about
                        creating innovative and interactive web solutions.
                    </p>
                    <div className="cta-buttons">
                        <a href="/about" className="btn">Learn More</a>
                        <a href="/portfolio" className="btn">My Work</a>
                    </div>
                    <div className="image-section">
                        <div className='image-item'>
                            <img src='/public/1.jpg' alt='Code Background'/>
                            <p className='image-description'> Coding is the backbone of innovation. Every line of code brings new possibilities </p>
                        </div>

                        <div className='image-item'>
                            <img src='/public/2.jpg' alt='Tech Workspace'/>
                            <p className='image-description'>A modern drives creativity and productivity in the tech world.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}