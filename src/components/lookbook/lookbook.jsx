import React from 'react';
import { Container } from 'react-bootstrap';
import Rick from './lookbook/rick';
import './style.css';
const Lookbook = () => {
  return (
    <Container className="lookbook">
       <h1>Lookbook</h1>
       <br/>
       <br/>
       <br/>
       <br/>
      <Rick/>
    </Container>
  );
};

export default Lookbook;
