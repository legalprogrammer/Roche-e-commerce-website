import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';
import NavBar from '../nav/nav';
import { connect } from 'react-redux';
import { addtocart, loaditem } from '../../redux/shopping/shopaction';
import { Link } from 'react-router-dom';
const Shop = ({ products, addtocart, loaditem }) => {
  document.title = 'Shop - all products';
  return (
    <div>
      <Container>
        <div className='filter' id='select'></div>
        <Container id='shop'>
          {products.map((prod) => {
            const { id, img, names, maker, price, classname } = prod;
            return (
              <>
                <div id='shop'>
                  <Container>
                    <div id='thumb' className={classname} key={id}>
                      <div>
                        <Link to={`/item/${id}`}>
                          <img src={img} alt='' onClick={() => loaditem(prod)} />
                        </Link>
                      </div>
                      <div className='text'>
                        <h3>{names}</h3>
                        <h4>${price}</h4>
                        <h6>{maker}</h6>
                        <Link to={`/item/${id}`}>
                          <button id='view' onClick={() => loaditem(prod)}>
                            view item
                          </button>
                        </Link>
                        <button onClick={() => addtocart(id)} id='cart'>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </Container>
                </div>
              </>
            );
          })}
        </Container>
      </Container>
    </div>
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
export default connect(mapstatetoprops, mapdispatch)(Shop);
