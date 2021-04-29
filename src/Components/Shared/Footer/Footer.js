import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container mt-5 bg-light p-5">
            <div className="row">
                <div className="col-md-4">
                    <h4>Moto Auto Wash</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et assumenda sunt quis numquam earum facere a, eius iste, ipsa veritatis eum, ab hic. Laboriosam saepe obcaecati magnam amet, dignissimos tempora!</p>
                </div>
                <div className="col-md-4">
                    <ul>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Demo Link</a></li>
                    </ul>
                    
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your email" />
                        <Button variant="success">Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className="bg-info p-2">
                <p className="text-center text-white">All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;