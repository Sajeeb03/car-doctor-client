import React from 'react';
import Location from '../Location/Location';
import About from '../About/About';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Products from '../Products/Products';
import ScrollToTop from '../../../hooks/ScrollToTop';

const Home = () => {
    ScrollToTop();
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