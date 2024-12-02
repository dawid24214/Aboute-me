import React from "react";
import '../style/_Portfolio.scss';

export const Portfolio = () =>{
    return (
        <div>
            <section className="portfolio">
                <header className="portfolio-header">
                    <h2>Portfolio</h2>
                    <p>Overview of My Best Works</p>
                </header>
                <div className="portfolio-grid">
                    <div className="portfolio-item">
                        <img src="/public/1.jpg" alt="Projekt 1"/>
                        <div className="portfolio-content">
                            <h3>Topic 1</h3>
                            <p>A brief description of the project in a few sentences</p>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src="/public/1.jpg" alt="Projekt 2"/>
                        <div className="portfolio-content">
                            <h3>Topic 2</h3>
                            <p>A brief description of the project in a few sentences</p>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src="/public/1.jpg" alt="Projekt 3"/>
                        <div className="portfolio-content">
                            <h3>Topic 3</h3>
                            <p>A brief description of the project in a few sentences</p>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img src="/public/1.jpg" alt="Projekt 4"/>
                        <div className="portfolio-content">
                            <h3>Topic 4</h3>
                            <p>A brief description of the project in a few sentences</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}