import React from "react";
import '../style/_Projects.scss';




export const Projects = () =>{


    const projects = [
        {title:'Project1', description: 'Description of Project 1'},
        {title:'Project2', description: 'Description of Project 2'},
        {title:'Project3', description: 'Description of Project 3'},
    ];

    return (


        <div>
            <section id='projects' className='projects' data-aos='fade-up'>
                <h2>Projects</h2>
                <div className='project-grid'>
                    {projects.map((project, index) =>(
                        <div className='project-card' key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}