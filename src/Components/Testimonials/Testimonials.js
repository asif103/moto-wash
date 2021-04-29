import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  useEffect(() => {
    fetch('https://pacific-depths-73984.herokuapp.com/testimonials')
      .then(response => response.json())
    .then(data => setTestimonials(data))
  }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div className="container bg-light p-5 shadow">
            <h2 className="section-head text-center"> Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)}
            </Slider>
      </div>
    );
};

export default Testimonials;