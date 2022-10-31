import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <About />
            <Services />
        </div>
    );
};

export default Home;