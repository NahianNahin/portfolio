import React from 'react';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import MyProjects from './MyProjects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <MyProjects></MyProjects>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;