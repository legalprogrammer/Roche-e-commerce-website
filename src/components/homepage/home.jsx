
import React from 'react';
import Arrival from '../arrivals/arrival';
import Cedric from '../cedric/cedrid';
import CartonOne from '../containerone/partone';
import Footer from '../footer/footer';
import Lookbook from '../lookbook/lookbook';
import NavBar from '../nav/nav';
import Wang from '../richardwang/wang';
import Story from '../story/story';

const Home = () => {
  return (
    <div>
      <NavBar />
      <CartonOne />
      <Story />
      <Arrival />
      <Wang />
      <Cedric />
      <Lookbook />
      <Footer />
    </div>
  );
};

export default Home;
