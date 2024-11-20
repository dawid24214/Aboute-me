import React from "react";
import '../style/_Contact.scss';

export const Contact = () =>{
    return (
        <div>
            <section id='contact' className='contact'>
                <h2>Contact Me</h2>
                <p>Feel free to reach out via the form below or my social links!</p>
                <form className='contact-form'>
                    <label>
                        Name:
                        <input type='text' placeholder='Your Name'/>
                    </label>
                    <label>
                        Email:
                        <input type='email' placeholder='Your Email'/>
                    </label>
                    <label>
                        Message:
                        <textarea placeholder='Your Message'></textarea>
                    </label>
                    <button type='submit'>Send Message</button>
                </form>
                <div className='social-links'>
                    <a href='https://www.linkedin.com/in/dawid-grochowski-3a0264322/' target='_blank' rel='noopener noreferrer'>
                        LinkedIn
                    </a>
                    <a href='https://github.com/dawid24214' target='_blank' rel='noopener noreferrer'>
                        GitHub
                    </a>
                </div>
            </section>
        </div>
    );
}