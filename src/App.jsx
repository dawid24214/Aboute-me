import React from "react";
import ReactDom from 'react-dom/client'
import {BrowserRouter as Router , Routes, Route } from "react-router-dom";
import {AboutMe} from './components/AboutMe.jsx'
import {Contact} from './components/Contact.jsx'
import {HeroSection} from './components/HeroSection.jsx'
import {Navbar} from './components/Navbar.jsx'
import {Portfolio} from './components/Portfolio.jsx'
import {Projects} from './components/Projects.jsx'
import './App.css';
import AOS from 'aos';

AOS.init({
    duration: 1000,
    once:true,
});



const App = () => {
    return(
             <Router>
                <div className='App'>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<HeroSection/>}/>
                        <Route path='/about' element={<AboutMe/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                        <Route path='/portfolio' element={<Portfolio/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                    </Routes>
                </div>
             </Router>
    );
}




const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);
root.render(<App/>);
export default App


