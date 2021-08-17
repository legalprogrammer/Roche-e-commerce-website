import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../nav/nav';
import story from '../pictures/story.png';
import wang from '../pictures/wang.jpg';
import m from '../pictures/m.jpg';
import Footer from '../footer/footer';
const About = () => {
  return (
    <div>
      <Container className='about'>
        <center>
          <h3>Our Story</h3>
          <p>Welcome to Fewer, Better Things</p>
        </center>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h3>A Foundation of Fewer</h3>
              <p>
                Fewer, better is the philosophy behind everything we do. We
                create timeless collections for the modern woman through
                carefully selected fabrics, precise silhouettes and attention to
                detail.
              </p>
            </Col>
            <Col className='' xs={7}>
              <img src={story} alt='' />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col className='' xs={7}>
              <img src={wang} alt='' />
            </Col>
            <Col>
              <h3>The Embodiment of Better</h3>
              <p>
                Each piece is made with integrity and kindness from the
                highest-quality materials, and created by skilled craftsmen
                throughout Europe, South America, China, and the United States.
              </p>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h3>Lean Closet</h3>
              <p>
                Cuyana is partnering with thredUP to expand our Lean Closet
                program. Complimentary Cuyana x thredUP shipping labels will be
                included with every domestic online order from cuyana.com, and
                available in stores. Use your label to pare down your closet to
                fewer, better pieces and help benefit women through H.E.A.R.T.
              </p>
            </Col>
            <Col className='' xs={7}>
              <img src={m} alt='' />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
      </Container>
      <Footer/>
    </div>
  );
};

export default About;
