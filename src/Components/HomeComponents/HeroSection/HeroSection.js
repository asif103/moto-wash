import { Carousel } from 'react-bootstrap';
import React from 'react';
import banner001 from '../../../images/banner001.jpg'
import banner002 from '../../../images/banner002.jpg'
import banner003 from '../../../images/banner003.jpg'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 bannerImage img-fluid"
                src={banner001}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 bannerImage img-fluid"
                src={banner002}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 bannerImage img-fluid"
                src={banner003}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroSection;