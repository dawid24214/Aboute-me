import '../style/_HeroSection.scss';
import React from "react";

export  const HeroSection = () => {
    return (
        <>
          <section className='home'>
              <div className='hero'>
                  <h1>Welcome to My My World</h1>
                  <p>
                      Hi, I'm <strong>Dawid Grochowski</strong> . A developer passionate about
                      creating innovative and interactive  web solution .
                  </p>
                  <div className='cta-buttons'>
                      <a href='/about' className='btn'>Learn More</a>
                      <a href='/portfolio' className='btn'>My work</a>
                  </div>
              </div>
          </section>
        </>
    );
}