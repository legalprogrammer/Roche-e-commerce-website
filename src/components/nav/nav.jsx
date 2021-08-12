import React from 'react';
import logo from '../pictures/logo.png';
import cart from '../pictures/cart.gif';
import person from '../pictures/person.png';
import search from '../pictures/search.png';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [state, setstate] = React.useState(false);
  const shownnav = () => {
    if (!state) {
      document.querySelector('.mobile').style.top = '0%';
    }
  };
  const closennav = () => {
    if (!state) {
      document.querySelector('.mobile').style.top = '-100%';
    }
  };
  const hidenav = () => {
    closennav();
  };

  return (
    <>
      <Container fluid className='header'>
        <Row className='navbar'>
          <Col xs={5}>
            <ul className='list'>
              <li className='links'>
                <a href='#'>shop</a>
              </li>
              <li className='links'>
                <a href='#'>about us</a>
              </li>
              <li className='links'>
                <a href='/projects'>projects</a>
              </li>
              <li className='links'>
                <a href='#'>journal</a>
              </li>
              <li className='links'>
                <a href='#'>podcasts</a>
              </li>
            </ul>
          </Col>
          <Col className='logo' xs={3}>
            <img src={logo} alt='logo' />
          </Col>
          <Col className='social'>
            <i>
              <img src={person} alt='links' />
            </i>
            <i>
              <img src={search} alt='link' />
            </i>
            <i>
              <img src={cart} alt='link' />
            </i>
          </Col>
        </Row>
      </Container>
      <div className='mobile'>
        <ul className='list'>
          <li className='links' onClick={hidenav}>
            <a href='#'>shop</a>
          </li>
          <li className='links' onClick={hidenav}>
            <a href='#'>about us</a>
          </li>
          <li className='links' onClick={hidenav}>
            <a href='#'>projects</a>
          </li>
          <li className='links' onClick={hidenav}>
            <a href='#'>journal</a>
          </li>
          <li className='links' onClick={hidenav}>
            <a href='#'>podcasts</a>
          </li>
        </ul>
        <button onClick={closennav}>close</button>
      </div>
      <div className='mobile-nav'>
        <Container>
          <section>
            <div>
              <img src={logo} alt='' />
            </div>
            <div>
              <button onClick={shownnav}>menu</button>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
