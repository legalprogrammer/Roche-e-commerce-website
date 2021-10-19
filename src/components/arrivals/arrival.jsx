import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import { connect } from 'react-redux';
import { addtocart, loaditem } from '../../redux/shopping/shopaction';
import leftarrow from '../pictures/left.png';
import rightarrow from '../pictures/right.png';
import { Link } from 'react-router-dom';

const Arrival = ({ products, addtocart, loaditem }) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const arrowright = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft += 100;
  };
  const arrowleft = () => {
    let slider = document.getElementById('slider');
    slider.scrollLeft -= 100;
  };
  return (
    <Container data-aos='fade-up'>
      <h1 className='title'>NEW ARRIVALS</h1>
      <br />
      <br />
      <Container className='thumbnail'>
        <img src={leftarrow} alt='' className='arrowleft' onClick={arrowleft} />
        <div className='products' id='slider'>
          {products.map((product) => {
            const { id, names, maker, price, img } = product;
            return (
              <div key={id} className='thumb'>
                <div>
                  <Link to={`/item/${id}`}>
                    <img
                      src={img}
                      alt='productimg'
                      onClick={() => loaditem(product)}
                    />
                  </Link>
                </div>
                <div className='text'>
                  <h4>{names}</h4>
                  <h5>{maker}</h5>
                  <h6>€{price}</h6>
                </div>
              </div>
            );
          })}
        </div>
        <img
          src={rightarrow}
          alt=''
          className='arrowright'
          onClick={arrowright}
        />
      </Container>
    </Container>
  );
};
const mapstatetoprops = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapdispatch = (dispatch) => {
  return {
    addtocart: (id) => dispatch(addtocart(id)),
    loaditem: (item) => dispatch(loaditem(item)),
  };
};
export default connect(mapstatetoprops, mapdispatch)(Arrival);
