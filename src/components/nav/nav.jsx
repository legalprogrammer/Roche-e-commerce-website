import React from 'react';
import cartimg from '../pictures/cart.gif';
import person from '../pictures/person.png';
import search from '../pictures/search.png';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basket from './cart';
import { connect } from 'react-redux';
import Checkout from './checkout';
const NavBar = ({ cart }) => {
  const [count, setcount] = React.useState(0);
  const [state, setstate] = React.useState(false);
  React.useEffect(() => {
    let countnum = 0;
    cart.forEach((item) => {
      countnum += item.qty;
    });
    setcount(countnum);
  }, [cart, count]);
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
  const showcart = () => {
    if (!state) {
      document.querySelector('.basket').style.right = '0%';
    }
  };

  return (
    <>
      <Container fluid className='header'>
        <Row className='navbar'>
          <Col>
            <ul className='list'>
              <li className='links'>
                <a href='/'>home</a>
              </li>
              <li className='links'>
                <a href='/shop'>shop</a>
              </li>
              <li className='links'>
                <a href='/about'>about us</a>
              </li>
              <li className='links'>
                <a href='/projects'>designers</a>
              </li>
              <li className='links'>
                <a href='/journal'>journal</a>
              </li>
            </ul>
          </Col>
          <Col className='logo'>
            <a href='/'>
              <strong>Roche Wears</strong>
            </a>
          </Col>
          <Col className='social'>
            <i>
              <img src={person} alt='links' />
            </i>
            <i>
              <img src={search} alt='link' />
            </i>
            <i onClick={showcart}>
              <img src={cartimg} alt='link' />
              <div className='count'>{count}</div>
            </i>
          </Col>
        </Row>
      </Container>
      <div className='basket'>
        <Basket />
      </div>
      <div className='checkout' id="checkout">
         <Checkout/>
      </div>
      <div className='mobile'>
        <ul className='list'>
          <li className='links' onClick={hidenav}>
            <a href='/'>home</a>
          </li>
          <li className='links' onClick={hidenav}>
            <a href='/shop'>shop</a>
          </li>
          <li className='links' onClick={hidenav}>
            <a href='/about'>about us</a>
          </li>
          <li className='links' onClick={hidenav}>
            <a href='/projects'>designers</a>
          </li>
          <li className='links' onClick={hidenav}>
            <a href='/journal'>journal</a>
          </li>
        </ul>
        <button onClick={closennav}>close</button>
      </div>
      <div className='mobile-nav'>
        <Container fluid>
          <section>
            <div>
              <button onClick={showcart}>
                Cart <div className='count'>{count}</div>
              </button>
            </div>
            <div>
              <a href='/'>
                <strong>Roche Wears</strong>
              </a>
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
const mapstatetoprops = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapstatetoprops)(NavBar);
