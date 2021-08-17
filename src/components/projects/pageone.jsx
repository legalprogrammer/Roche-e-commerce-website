import React from 'react';
import NavBar from '../nav/nav';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer/footer';
const Pageone = () => {
  document.title = 'Our  Designers';
  return (
    <div>
      <NavBar />
      <Container className='project' fluid>
        <Row>
          <Col className='carton' id='one' sm>
            <a href='/derti'>
              <div className='text'>
                <strong>DEEPTI BARTH RE-EDITION</strong>
              </div>
            </a>
          </Col>
          <Col className='carton' id='two' sm>
            <a href='/CEDRICJACQUEMYN'>
              <div className='text'>
                <strong>CEDRIC JACQUEMYN</strong>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className='carton' id='three' sm>
            <a href='/amadei'>
              <div className='text'>
                <strong>MA+ FOR LUCENTEMENT</strong>
              </div>
            </a>
          </Col>
          <Col className='carton' id='four' sm>
            <a href='/james'>
              <div className='text'>
                <strong>JAMES KEARNS FOR LUCENTEMENT</strong>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className='carton' id='five' sm>
            <a href='/socks'>
              <div className='text'>
                <strong>LUCENTEMENT SIGNATURE SOCKS</strong>
              </div>
            </a>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Pageone;
