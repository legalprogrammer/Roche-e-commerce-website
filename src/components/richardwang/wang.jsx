import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import wangman from '../pictures/wangman.jpg';
import wang from '../pictures/wang.jpg';
const Wang = () => {
  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <Container className='wang'>
        <h2 className='title'>RIGARDS X UMA WANG</h2>
        <Row>
          <Col data-aos="fade-right" sm>
            <img src={wangman} alt='image' />
          </Col>
          <Col  data-aos="fade-left" sm>
            <img src={wang} alt='image' className='small' />
            <p className='text'>
              Artisanal designer Uma Wang has built one of the most beautiful
              fashion collections using sumptuous fabrics and prints. Now the
              virtuoso shares her artistry with RIGARDS, the natural eyewear
              specialist recognized for its nonconformist spirit and
              transformative craftsmanship. Special Considerations: The use of
              natural materials and handmaking processes bring random variations
              that give each pair of frames their unusual and unrepeatable
              appearance, color, and finish. These characteristics are not
              considered a defect, rather they add to the materials’ natural
              appeal and create a more unique wearing experience. Never use
              acidic cleaners on your frames. Please see the care guide for tips
              on keeping your frames in great condition.
            </p>
            <div>
              <a href=''>READ MORE</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Wang;
