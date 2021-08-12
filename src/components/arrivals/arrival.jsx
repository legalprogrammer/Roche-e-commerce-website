import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Aos from 'aos';
import 'aos/dist/aos';
import './style.css';
import { arrivals } from './data';
import leftarrow from '../pictures/left.png';
import rightarrow from '../pictures/right.png';

const Arrival = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const [products, setproducts] = useState(arrivals);

  const deleteitem = (id) => {
    let newproducts = products.filter((newproduct) => newproduct.id !== id);
    setproducts(newproducts);
  };
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
      <br/>
      <br/>
      <Container className='thumbnail'>
        <img src={leftarrow} alt='' className='arrowleft' onClick={arrowleft} />
        <div className='products' id='slider'>
          {products.map((product) => {
            const { id, names, maker, price, img } = product;
            return (
              <div key={id} className='thumb'>
                <div>
                  <img src={img} alt='productimg' />
                </div>
                <div className='text'>
                  <h4>{names}</h4>
                  <h5>{maker}</h5>
                  <h6>{price}</h6>
                </div>
                <button className='del' onClick={() => deleteitem(id)}>
                  delete
                </button>
                <a>
                  <Button className='discount'>Add to cart</Button>
                </a>
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

export default Arrival;
