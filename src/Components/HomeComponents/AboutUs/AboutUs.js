import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <Container className="mt-5">
                <h1 className="text-center section-head mt-5 mb-5">About Us</h1>
                <Row>
                    <Col md={6} xs={12}>
                        <Image src="https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_960_720.png" thumbnail></Image>
                    </Col>
                    <Col md={6} xs={12}>
                        <h3>Who we are</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil obcaecati nobis optio iure qui, incidunt asperiores placeat aliquam magni dolores perspiciatis, laboriosam recusandae, dolore sit laudantium quidem. Molestias, quia nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt itaque dignissimos fugiat placeat aspernatur, repudiandae quis reiciendis facere voluptate quam sequi provident? Adipisci provident corporis ducimus suscipit vero ea.
                        </p>
                        <h3>What we do</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil obcaecati nobis optio iure qui, incidunt asperiores placeat aliquam magni dolores perspiciatis, laboriosam recusandae, dolore sit laudantium quidem. Molestias, quia nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt itaque dignissimos fugiat placeat aspernatur, repudiandae quis reiciendis facere voluptate quam sequi provident? Adipisci provident corporis ducimus suscipit vero ea.
                        </p>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default AboutUs;