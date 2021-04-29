import React from 'react';
import './Testimonial.css'

const Testimonial = ({testimonial}) => {
    
    return (
        
        <div className="p-5 bg-info m-5">
            <h4>{ testimonial.name}</h4>
            <p>{ testimonial.review}</p>
        </div>
            
    );
};

export default Testimonial;