import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={1} sm>
            
          </Col>
          <Col sm>
            <h3>Directory</h3>
            <ul>
              <li>
                <a href='/'>HOME</a>
              </li>
              <li>
                <a href=''>SHOP</a>
              </li>
              <li>
                <a href='/projects'>PROJECTS</a>
              </li>
              <li>
                <a href=''>JOURNAL</a>
              </li>
              <li>
                <a href='/about'>OUR STORY</a>
              </li>
            </ul>
          </Col>
          <Col sm>
            <h3>customer care</h3>
            <ul>
              <li>
                <a href=''>Terms & consitions</a>
              </li>
              <li>
                <a href=''>Refund policy</a>
              </li>
              <li>
                <a href=''>Privacy policy</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h3>join our community </h3>
            <p>
              Be the first to get the latest info about Avant-Garde Fashion, our
              upcoming collaborations and more.
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        © 2021 Roche wears - ikeja way 140 | Lagos.
      </Container>
    </footer>
  );
};

export default Footer;
