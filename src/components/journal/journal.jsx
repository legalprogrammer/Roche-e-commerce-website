import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.css';
import msunu from '../pictures/msunu.jpg';
import xclusive from '../pictures/xclusive.jpg';
import sunu from '../pictures/sunu.jpg';
import cedric from '../pictures/ced3.jpg';
import asia from '../pictures/asia.png';
import Footer from '../footer/footer';
const Journal = () => {
  document.title = 'Roche - Our Journal';
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='journal'>
        <Container fluid className='book'>
          <Row>
            <Col sm data-aos='fade-left'>
              <img src={msunu} alt='msunu' />
            </Col>
            <Col sm className='text' data-aos='fade-right'>
              <h5>lookbook</h5>
              <h2>JAN-JAN VAN ESSCHE PROJECT 9 ”SUNU”</h2>
              <h3>View SUNU the movie of Jan-Jan van Essche PROJECT 9.</h3>
              <a href='/janjanvan'>
                <Button>READ MORE </Button>
              </a>
            </Col>
          </Row>
        </Container>
        <Container fluid className='book'>
          <Row>
            <Col sm className='text' data-aos='fade-right'>
              <h5>EXCLUSIVES</h5>
              <h2>SYNERGIA - EXHIBITION</h2>
              <h3>
                SYNERGIA, an exhibition series by Iris van Herpen, Carla van de
                Puttelaar & Pien Rademakers.
              </h3>
              <a href='/syneria'>
                <Button>READ MORE </Button>
              </a>
            </Col>
            <Col sm data-aos='fade-left'>
              <img src={xclusive} alt='xclusive' />
            </Col>
          </Row>
        </Container>
        <Container fluid className='book'>
          <Row>
            <Col sm data-aos='fade-left'>
              <img src={asia} alt='img' />
            </Col>
            <Col sm className='text' data-aos='fade-right'>
              <h5>lookbooks</h5>
              <h2>MA+ by Maurizio Amadei FW21</h2>
              <h3>
                Highlights of the FW21 lookbook from MA+ by Maurizio Amadei.
              </h3>
              <a href='/amadelfw'>
                <Button>READ MORE </Button>
              </a>
            </Col>
          </Row>
        </Container>
        <Container fluid className='book'>
          <Row>
            <Col sm className='text' data-aos='fade-left'>
              <h5>lookbooks</h5>
              <h2>Jan-Jan van Essche FW21 - Project #9 'SUNU'</h2>
              <h3>
                Full Lookbook of Jan-Jan van Essche FW21 - Project #9 'SUNU'
              </h3>
              <a href='/sunufw'>
                <Button>READ MORE </Button>
              </a>
            </Col>
            <Col sm data-aos='fade-right'>
              <img src={sunu} alt='sunu' />
            </Col>
          </Row>
        </Container>
        <Container fluid className='book'>
          <Row>
            <Col sm data-aos='fade-left'>
              <img src={cedric} alt='image' />
            </Col>
            <Col sm className='text' data-aos='fade-right'>
              <h5>DESIGNERS</h5>
              <h2>CEDRIC JACQUEMYN</h2>
              <h3>
                Meet Cedric Jacquemyn, a trustful Artisan from Antwerp, Belgium.
              </h3>
              <a href='/CEDRICJACQUEMYN'>
                <Button>READ MORE </Button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Journal;
