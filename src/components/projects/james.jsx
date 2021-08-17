import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../nav/nav';
import picone from '../pictures/k1.jpg';
import pictwo from '../pictures/k2.jpg';
import picthree from '../pictures/k3.jpg';
import './project.css';
import Footer from '../footer/footer';
const James = () => {
  document.title = 'Our project - James kearns designs';
  return (
    <div>
      <NavBar />
      <div className='derti'>
        <Container fluid>
          <center>
            <strong>MA+ FOR LUCENTEMENT</strong>
            <p>
              M.A+ Maurizio Amadei for Lucentement is the end result of two
              entities walking their individual ways through the paths of the
              unknown to circumstantially discover an amalgamation. This
              amalgamation is a reference to the relationship between Maurizio
              Amadei and Lucentement. There was an immediate synergy from the
              moment they got to know each other.
            </p>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/muNBveAzjHA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
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
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default James;
