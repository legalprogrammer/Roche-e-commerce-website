import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import topimg from '../pictures/topimgg.jpg';
import toptwo from '../pictures/toptwo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const CartonOne = () => {
  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className="maintop">
      <Container fluid className='top'>
        <Container>
          <Row>
            <Col  className='words' data-aos='fade-right' sm>
              <h1 className='title'>Roche L’imperméable</h1>
              <p className='text'>
                Find the latest news about designers in Avant-grande fashion.
                Read more about L’imperméable exclusive colloboration projects
                and buy curated products
              </p>
            </Col>
            <Col data-aos='fade-left' id='pic' sm>
              <img src={topimg} alt='picture' />
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="explore" data-aos="fade-up">
            <div>
              <a href='#' className='explore'>
                exlore collection
              </a>
            </div>
            <div>
               <img src={toptwo} alt="pic" />
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default CartonOne;
