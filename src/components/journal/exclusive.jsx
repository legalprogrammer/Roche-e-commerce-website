import React from 'react';
import NavBar from '../nav/nav';
import { Container } from 'react-bootstrap';
import x1 from '../pictures/x1.jpg';
import xclusive from '../pictures/xclusive.jpg';
import x2 from '../pictures/x2.jpg';
import x3 from '../pictures/x3.jpg';
import x4 from '../pictures/x4.jpg';
import x5 from '../pictures/x5.jpg';
import x6 from '../pictures/x6.jpg';
import x7 from '../pictures/x7.jpg';
import x8 from '../pictures/x8.jpg';
import x9 from '../pictures/x9.jpg';
import x10 from '../pictures/x10.jpg';
import x11 from '../pictures/x11.jpg';
import x12 from '../pictures/x12.jpg';
import x13 from '../pictures/x13.jpg';

import './style.css';
import Footer from '../footer/footer';
const Syneria = () => {
   document.title = 'Roche - SYNERGIA - EXHIBITION'
  return (
    <>
      <div id='van'>
        <Container>
          <div>
            <h5>EXCLUSIVES </h5>
          </div>
          <h2>SYNERGIA - EXHIBITION</h2>
          <div>
            <img src={xclusive} alt='' />
          </div>
          <div>
            <p>
              SYNERGIA is an exhibition series by Iris van Herpen, Carla van de
              Puttelaar & Pien Rademakers.
            </p>
            <p>
              Last week, we were invited to the exhibition of Dutch Artisanal
              designer Iris van Herpen, Award winning Portrait Photographer
              Carla van de Puttelaar & Pien Rademakers.
            </p>
            <p>
              The project called SYNERGIA guides the innovative artisanal
              couture by Iris van Herpen through the powerful portrait lens of
              photography artist Carla van de Puttelaar. The exhibition is held
              in Rademakers Gallery which ends the perpetual circle of Synergia.
            </p>
          </div>
          <div>
            <img src={x1} alt='' />
            <p>
              The fascination for this project excites out of the endless
              possibilities of combining the human body to movement, textures,
              cloth and light. The complete artwork was shot in natural light
              which is Carla’s signature. Thereafter, all models were carefully
              selected to complement the couture dresses by Iris van Herpen & to
              establish synergy with the other models.
            </p>
          </div>
          <div>
            <img src={x2} alt='' />
            <p>
              Iris van Herpen, known for her innovative couture dresses,
              supplemented the exhibition with three of her dresses which were
              simultaneously used in the photographs. Showing the numerous
              details of the dresses & stiffness of the materials. A perfect
              addition to visualize the complexity of this project, the images
              of Synergia show powerful movement of the models and dresses,
              while the dresses are actually stiff and difficult to establish
              movement with. This acquired a certain creativity from the team to
              where models were forced to lie down so movement could be
              visualized in the photographs.
            </p>
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
          <div>
            <img src={x9} alt='' />
          </div>
          <div>
            <img src={x10} alt='' />
          </div>
          <div>
            <img src={x11} alt='' />
          </div>
          <div>
            <img src={x12} alt='' />
          </div>
          <div>
            <img src={x13} alt='' />
            <p>
              The exhibition SYNERGIA will run until 15th May 2021 in Amsterdam,
              and shows photography by Carla van de Puttelaar, supplemented by 3
              couture dresses by Iris van Herpen. The photography is currently
              available for sale at Rademarkers Gallery.
            </p>
          </div>
          <div className='list'>
            <h4>CREDIT</h4>
            <ul>
              <li>Dresses - IRIS VAN HERPEN</li>
              <li>Photography - CARLA VAN DE PUTTELAAR</li>
              <li>Gallery - PIEN RADEMAKERS</li>
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

export default Syneria;
