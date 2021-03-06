import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container fluid style={{ paddingTop: 20, paddingBottom: 20 }}>
    <Row id='landing-page' className="align-middle text-center">
      <Col xs={4}>
        <Image roundedCircle src="/images/meteor-logo.png" width="150px"/>
      </Col>

      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>Manoa Fitness Finder</h1>
        <p>Improving lifestyle by connecting with others</p>
      </Col>

    </Row>
  </Container>
);

export default Landing;
