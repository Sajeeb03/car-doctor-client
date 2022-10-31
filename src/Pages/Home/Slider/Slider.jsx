import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import './Slider.css'
import SliderItem from './SliderItem';

const Slider = () => {

    const slider = [
        {
            id: 1,
            image: img1,
            prev: 6,
            next: 2
        },
        {
            id: 2,
            image: img2,
            prev: 1,
            next: 3
        },
        {
            id: 3,
            image: img3,
            prev: 2,
            next: 4
        },
        {
            id: 4,
            image: img4,
            prev: 3,
            next: 5
        },
        {
            id: 5,
            image: img5,
            prev: 4,
            next: 6
        },
        {
            id: 6,
            image: img6,
            prev: 5,
            next: 1
        },
    ]
    return (
        <div className="carousel w-full">
            {
                slider.map(slide => <SliderItem
                    key={slide.id}
                    slide={slide}
                ></SliderItem>)
            }

            {/* <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Slider;