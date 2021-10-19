import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../nav/nav';
import picone from '../pictures/ced1.jpg';
import pictwo from '../pictures/ced2.jpg';
import picthree from '../pictures/ced3.jpg';
import picfr from '../pictures/cedricl.jpg';
import './project.css';
import Footer from '../footer/footer';
const Jack = () => {
  document.title = 'Our project- CEDRIC JACQUEMYN';
  return (
    <div>
      <div className='derti'>
        <Container fluid>
          <center>
            <strong>CEDRIC JACQUEMYN</strong>
            <p>
              Cedric Jacquemyn is a Belgian fashion designer and alumnus of the
              Royal Academy of Fine Arts Antwerp. His style is focused on
              craftsmanship and said to be "darkly romantic". Cedric Jacquemyn
              has a conceptual approach, his collections are influenced by
              history and politics. Wikipedia
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

export default Jack;
