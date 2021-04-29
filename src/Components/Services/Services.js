import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
  useEffect(() => {
    fetch('https://pacific-depths-73984.herokuapp.com/services')
      .then(response => response.json())
    .then(data => setServices(data))
  }, [])
    return (
      <div className="container mb-5 mt-5">
        <h1 className="section-head text-center">Our Services</h1>
        <div className="row">
            {services.map(services => <Service services={services}></Service>)}
            </div>
        </div>
    );
};

export default Services;