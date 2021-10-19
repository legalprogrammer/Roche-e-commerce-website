import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../nav/nav';
import picone from '../pictures/s1.jpg';
import pictwo from '../pictures/s5.jpg';
import picthree from '../pictures/s3.jpg';
import picfr from '../pictures/s4.png';
import './project.css';
import Footer from '../footer/footer';
const Socks = () => {
  document.title = 'Our project- MA + lucentement  designs';
  return (
    <div>
      <div className='derti'>
        <Container fluid>
          <center>
            <strong>LUCENTEMENT SIGNATURE SOCKS</strong>
            <p>
              M.A+ Maurizio Amadei for Lucentement is the end result of two
              entities walking their individual ways through the paths of the
              unknown to circumstantially discover an amalgamation. This
              amalgamation is a reference to the relationship between Maurizio
              Amadei and Lucentement. There was an immediate synergy from the
              moment they got to know each other.
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
        <br />
        <br />
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
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Socks;
