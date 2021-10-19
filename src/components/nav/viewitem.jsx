import React from 'react';
import { connect } from 'react-redux';
import './item.css';
import { addtocart } from '../../redux/shopping/shopaction';
import Footer from '../footer/footer';
const Viewitem = ({ currentitems,addtocart }) => {
  return (
    <>
      <div className='viewitems'>
        <div>
          <img src={currentitems.img} alt='' />
        </div>
        <div>
          <h3>{currentitems.maker}</h3>
          <h2>{currentitems.names}</h2>
          <h1>${currentitems.price}</h1>
          <p>
            Including 21% VAT (EU). Non-EU customers are exempt of tax at
            checkout.
          </p>
          <button onClick={()=> addtocart(currentitems.id)}>Add to cart</button>
          <p>
            The durable and lightweight boots by Soderberg are the Staple and
            signature of SODERBERG. The REPEATER features a stacked heel
            construction while maintaining a classic shape. Due to the
            flexibility of the leather, trousers can be worn inside and outside
            the boots. Comes with 130 high grade strap with stainless steel
            puller.
          </p>

          <ul>
            <h2>PRODUCT DETAILS </h2>
            <li>Leather pull-loop.</li>
            <li>Lightweight boots.</li>
            <li> Stacked sole.</li>
            <li> Side zipper.</li>
            <li>Made in Italy.</li>
          </ul>
          <ul>
            <h2>COMPOSITION </h2>
            <li>Vegetable tanned calf leather 100%</li>
          </ul>
          <ul>
            <h2>AVAILABILITY </h2>
            <li>Production and shipment in 3-4 weeks.</li>
            <li>This item is Made-to-order - no returns eligible.</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
};
const maptoload = (state) => {
  return {
    currentitems: state.shop.currentitems,
  };
};
const mapdispatch = (dispatch) => {
  return {
    addtocart: (id) => dispatch(addtocart(id)),
  };
};
export default connect(maptoload,mapdispatch)(Viewitem);
