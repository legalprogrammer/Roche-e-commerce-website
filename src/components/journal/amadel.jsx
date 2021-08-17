import React from 'react';
import NavBar from '../nav/nav';
import { Container } from 'react-bootstrap';
import x1 from '../pictures/ama8.png';
import xclusive from '../pictures/asia.png';
import x2 from '../pictures/ama1.png';
import x3 from '../pictures/ama2.png';
import x4 from '../pictures/ama3.png';
import x5 from '../pictures/ama4.png';
import x6 from '../pictures/ama5.png';
import x7 from '../pictures/ama6.png';
import x8 from '../pictures/ama7.png';

import './style.css';
import Footer from '../footer/footer';
const Amadelfw = () => {
  document.title = 'Roche-MA+ by Maurizio Amadei FW21';
  return (
    <>
      <div id='van'>
        <Container>
          <div>
            <h5>LOOKBOOKS</h5>
          </div>
          <h2>MA+ by Maurizio Amadei FW21</h2>
          <div>
            <img src={xclusive} alt='' />
          </div>
          <div>
            <p>
              The Fall Winter 21 collection from MA+ by Maurizio Amadei was
              presented in a playful way where the focus was clearly on movement
              & wearability.
            </p>
            <p>
              The models were moving around the camera to show the different
              angles of the outfits. The collection expresses the flexibility
              and wearability of the designs, with the deeper meaning of
              visualising the freeness of complex constructions and seams, where
              Maurizio Amadei is known for.
            </p>
            <p>
              The models were moving around the camera to show the different
              angles of the outfits. The collection expresses the flexibility
              and wearability of the designs, with the deeper meaning of
              visualising the freeness of complex constructions and seams, where
              Maurizio Amadei is known for.
            </p>
          </div>
          <div>
            <img src={x1} alt='' />
          </div>
          <div>
            <img src={x2} alt='' />
          </div>
          <div>
            <img src={x3} alt='' />
          </div>
          <div>
            <img src={x4} alt='' />
          </div>
          <div>
            <img src={x5} alt='' />
          </div>
          <div>
            <img src={x6} alt='' />
          </div>
          <div>
            <img src={x7} alt='' />
          </div>
          <div>
            <img src={x8} alt='' />
          </div>
          <br />
          <br />
          <a href='/journal' className='back'>
            Back to Journal
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Amadelfw;
