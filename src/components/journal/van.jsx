import React from 'react';
import NavBar from '../nav/nav';
import { Container } from 'react-bootstrap';
import msunu from '../pictures/msunu.jpg';
import './style.css';
import Footer from '../footer/footer';
const Van = () => {
  document.title = 'JAN-JAN VAN ESSCHE'
  return (
    <>
      <div id='van'>
        <Container>
          <div>
            <h5>LOOKBOOKS</h5>
          </div>
          <h2>JAN-JAN VAN ESSCHE PROJECT 9 ”SUNU”</h2>
          <div>
            <img src={msunu} alt='' />
          </div>
          <div>
            <p>
              SUNU the movie is a fashion short film directed by Ramy Moharam
              Fouad with choreography by Sidi Larbi Cherkaoui on the AW21
              Project#9 SUNU by Jan-Jan Van Essche.
            </p>
            <p>
              The collective idea SUNU, meaning ‘our’ in the Wolof language,
              summarizes the sentiment of unity, vulnerability and idiomatic
              expressions. A feeling of leadership towards the athmosphere and
              nature that surrounds us. An honest relation, a meaningful
              connection, which acquires to be celebrated and appreciated while
              on the other hand needs to be protected.
            </p>
            <p>
              With project SUNU, Jan-Jan van Essche seeks resonance and merging
              associations, reaching for an all-embracing understanding.
            </p>
          </div>
          <div>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/QbqbXYMnt-g'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div className='list'>
            <h4>CREDIT</h4>
            <ul>
              <li>Written and directed by Ramy Moharam Fouad</li>
              <li>For Jan-Jan Van Essche's PROJECT#9 ‘SUNU’</li>
              <li>Choreography by Sidi Larbi Cherkaoui </li>
              <li>Director of photography Jordan Vanschel </li>
              <li>Music composer Willem Ardui </li>
              <li>With Mohamed Toukabri </li>
              <li>Hanna-Lee Daled</li>
              <li>Location Imaginair </li>
            </ul>
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

export default Van;
