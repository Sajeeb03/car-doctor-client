import React from 'react';
import Location from '../Location/Location';
import About from '../About/About';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Slider />
            <About />
            <Services />
            <Location />
            <Products />
        </div>
    );
};

export default Home;