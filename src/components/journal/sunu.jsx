import React from 'react';
import NavBar from '../nav/nav';
import { Container } from 'react-bootstrap';
import x1 from '../pictures/sunu1.jpg';
import xclusive from '../pictures/sunu.jpg';
import x2 from '../pictures/sunu2.jpg';
import x3 from '../pictures/sunu3.jpg';
import x4 from '../pictures/sunu5.jpg';
import x5 from '../pictures/sunu6.jpg';
import x6 from '../pictures/sunu7.jpg';
import x7 from '../pictures/sunu8.jpg';
import x8 from '../pictures/sunu9.jpg';
import x9 from '../pictures/sunu10.jpg';
import x10 from '../pictures/sunu11.jpg';
import x11 from '../pictures/sunu 12.jpg';

import './style.css';
import Footer from '../footer/footer';
const Sunufw = () => {
  document.title = `Roche - Jan-Jan van Essche FW21 - Project #9 'SUNU'`;
  return (
    <>
      <div id='van'>
        <Container>
          <div>
            <h5>LOOKBOOKs </h5>
          </div>
          <h2>Jan-Jan van Essche FW21 - Project #9 'SUNU'</h2>
          <div>
            <img src={xclusive} alt='' />
          </div>
          <div>
            <p>
              Jan-Jan van Essche presented his FW21 collection with an
              interactive film, where at certain moments during the film you
              could click on the models to view their outfit up-close. A
              marvelous way of presenting a collection, and we are blown away by
              the collection.
            </p>
          </div>
          <div>
            <img src={x1} alt='' />
            <img src={x2} alt='' />
            <p>
              The collective idea SUNU, meaning ‘our’ in the Wolof language,
              summarises the sentiment of unity, fragility and inclusive
              interconnectivity. A sense of responsibility towards each other
              and what surrounds us. A solid bond, a strong connection, which
              needs to be cherished and praised but simultaneously guarded.⁠
            </p>
          </div>
          <div>
            <img src={x3} alt='' />
            <p>
              With the SUNU collection, the designer reaches out seeking
              resonance and forging alliances, longing for universal
              understanding. ⁠The fabrics are ranging from in-house handwoven
              cloths to well insulating yak wool blends, from traditional
              Chinese mud-dyed silks to prime Italian vintage-like weaves.
            </p>
            <p>More from Jan-Jan van Essche Project 9 SUNU below.</p>
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
          <div>
            <img src={x9} alt='' />
          </div>
          <div>
            <img src={x10} alt='' />
          </div>
          <div>
            <img src={x11} alt='' />
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

export default Sunufw;
