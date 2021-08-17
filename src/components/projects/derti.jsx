import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../nav/nav';
import picone from '../pictures/d1.jpg';
import pictwo from '../pictures/d2.jpg';
import picthree from '../pictures/d3.jpg';
import picfr from '../pictures/d4.jpg';
import picfive from '../pictures/d5.jpg';
import './project.css';
import Footer from '../footer/footer';
const Derti = () => {
  document.title = 'Our project-Derti barts re-edition designs';
  return (
    <div>
      <NavBar />
      <div className='derti'>
        <Container fluid>
          <center>
            <strong>DEEPTI BARTH RE-EDITION</strong>
            <p>
              After graduating from London’s Central Saint Martins in 2005,
              German-Argentinian artist and designer Deepti Barth honed her
              skills as a designer at Carol Christian Poell’s studio in Milan.
              In 2012, after working for the cult-favorite brand for seven
              years, Barth branched off to launch her own clothing and
              accessories line:
            </p>
          </center>
        </Container>
        <br /> <br />
        <Container>
          <Row>
            <Col sm>
              <img src={picone} alt='' />
            </Col>
            <Col sm>
              <img src={pictwo} alt='' />
            </Col>
          </Row>
        </Container>
          <br /><br />
        <Container>
          <Row>
            <Col sm>
              <img src={picthree} alt='' />
            </Col>
            <Col sm>
              <img src={picfr} alt='' />
            </Col>
          </Row>
        </Container>
      </div>
          <br /><br /> 
      <Footer/>
    </div>
  );
};

export default Derti;
