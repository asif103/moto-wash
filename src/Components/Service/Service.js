import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = ({services}) => {
    const history = useHistory();
    const handleBook = (service) => {
        history.push(`/addBooking/${service}`);
    }
    return (
        <Col>
            <Card style={{ width: '18rem' }} className="singleService">
            <Card.Img variant="top" src={services.imageURL} />
            <Card.Body>
                <Card.Title>{ services.name}</Card.Title>
                <Button variant="primary" onClick={() => handleBook(services.name)}>Book Service</Button>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;