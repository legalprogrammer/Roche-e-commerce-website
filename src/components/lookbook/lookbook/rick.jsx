import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import owen from '../../pictures/owen.png';
import owenn from '../../pictures/asia.png';
import sunu from '../../pictures/sunu.jpg';
const Rick = () => {
  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <Container className='rick' data-aos="fade-right">
        <Row>
          <Col sm>
            <h3 id='h3'>RICK OWENS MENS FW21 GETHSEMANE</h3>
          </Col>
          <Col sm className='pic'>
            <img src={owen} alt='' />
          </Col>
          <Col sm>
            <p>
              Dark romance and broken beauty fill the collections of Rick Owens,
              the LA-born master of glamorous grunge (or ‘glunge’ as he calls
              it). His collections of wearable luxury combined with a
              rock’n’roll attitude has attracted celebrity fans such as Rihanna,
              Nicole Richie and Madonna.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className='rick' data-aos="fade-left">
        <Row>
          <Col sm className='pic'>
            <img src={owenn} alt='' />
          </Col>
          <Col sm>
            <h3 id='h4'>MA+ BY MAURIZIO AMADEI FW21</h3>
            <p className='ma'>
              M.A+ (pronounced "em - across") is the label of Italian
              self-taught designer Maurizio Amadei. Maurizio is known for his
              innovative folding techniques, pattern designs, minimal
            </p>
            <a href=''>READ MORE</a>
          </Col>
        </Row>
      </Container>
      <Container className='rick' data-aos="fade-right">
        <Row>
          <Col sm></Col>
          <Col className='sunu' sm>
            <h3 id='h5'>
              Jan-Jan van Essche FW21 <br /> - Project #9 'SUNU'
            </h3>
            <p className='ma'>
              M.A+ (pronounced "em - across") is the label of Italian
              self-taught designer Maurizio Amadei. Maurizio is known for his
              innovative folding techniques, pattern designs, minimal
            </p>
            <a href=''>READ MORE</a>
          </Col>
          <Col sm className='pic'>
            <img src={sunu} alt='' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rick;
