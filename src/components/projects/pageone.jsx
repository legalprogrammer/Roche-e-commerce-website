import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer/footer';
const Pageone = () => {
  document.title = 'Our  Designers';
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Container className='project' fluid >
        <Row>
          <Col className='carton' id='one' sm data-aos='fade-left'>
            <a href='/derti'>
              <div className='text'>
                <strong>DEEPTI BARTH RE-EDITION</strong>
              </div>
            </a>
          </Col>
          <Col className='carton' id='two' sm data-aos='fade-right'>
            <a href='/CEDRICJACQUEMYN'>
              <div className='text'>
                <strong>CEDRIC JACQUEMYN</strong>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className='carton' id='three' sm data-aos='fade-right'>
            <a href='/amadei'>
              <div className='text'>
                <strong>MA+ FOR LUCENTEMENT</strong>
              </div>
            </a>
          </Col>
          <Col className='carton' id='four' sm data-aos='fade-left'>
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
