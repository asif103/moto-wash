import React from 'react';
import { Container } from 'react-bootstrap';
import './Mission.css'

const Mission = () => {
    return (
        <div className="missionContainer text-center p-5">
            <Container className="shadow p-5">
                <h1 className="section-head">Our Mission and Vision</h1>
                <h4 className="text-danger">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi explicabo nulla minima blanditiis sequi? Voluptate quas repellendus cumque iure, ratione quo veniam enim dolorem ab fugit mollitia? Libero, ducimus delectus!</h4>
                <ul style={{ 'color': 'green', 'fontSize': '18px'}}>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus repudiandae, cupiditate perferendis molestias debitis eum eos quasi cum hic error!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus repudiandae, cupiditate perferendis molestias debitis eum eos quasi cum hic error!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus repudiandae, cupiditate perferendis molestias debitis eum eos quasi cum hic error!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus repudiandae, cupiditate perferendis molestias debitis eum eos quasi cum hic error!</li>
                </ul>
            </Container>
        </div>
    );
};

export default Mission;