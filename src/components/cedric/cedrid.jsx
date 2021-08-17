import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cedricl from '../pictures/cedricl.jpg';
import Cedricman from '../pictures/ced1.jpg';
import Cedricmann from '../pictures/ced2.jpg';

const Cedric = () => {
  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <Container className='cedric'>
        <h2 className='title'>Cedric jacquemyn</h2>
        <Row>
          <Col sm>
            <div className='same'>
              <img src={Cedricman} alt='image' data-aos="fade-left" />
              <br />
              <br />
              <p data-aos="fade-left" >
                Showing off his skills as a sartorial tailor, Cedric Jacquemyn’s
                collection starts at the root of cloth and construction; by
                taking perfect cuts with great fabrics and combining these into
                meticulous fits.
              </p>
            </div>
            <div className='same'>
              <img src={Cedricmann} alt='image' data-aos="fade-left"  />
            </div>
          </Col>
          <Col sm>
            <img src={Cedricl} alt='image' className='small' data-aos="fade-right"  />
            <p className='text' data-aos="fade-right"  >
              One of the 2010 alumni of the Royal Antwerp Academy, fashion
              designer Cedric Jacquemyn has developed his darkly romantic
              menswear aesthetic into a ready-to-wear business. Launching his
              eponymous label during FW11 Paris mensweek.
            </p>
            <div>
              <a href='' data-aos="fade-right" >READ MORE</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cedric;
