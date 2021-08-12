import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import story from '../pictures/story.png';
import './style.css';

const Story = () => {
  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <Container className='story'>
      <Row>
        <Col className='text' data-aos="fade-right">
          <h1>Our story</h1>
          <p>
            Roche L’imperméable is founded by two brothers named mel and chase
            Vermande in 2013. The brothers started Lucentement to help
            Avant-Garde designers get more exposure via social media channels.
          </p>
          <p>
            Roche L’imperméable strives to become the most trusted storytelling
            platform within the Avant-Garde Niche. With the necessity to protect
            and at the same time credit this niche for its incredible influence
            on the fashion industry, Lucentement's vision is to express
            Avant-Garde fashion and designers online in the most righteous way
            possible.
          </p>
          <a href="">READ MORE</a>
        </Col>
        <Col xs={5} data-aos="fade-left">
          <img src={story} alt='ourstory' />
        </Col>
      </Row>
    </Container>
  );
};

export default Story;
