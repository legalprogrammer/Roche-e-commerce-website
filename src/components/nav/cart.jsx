import React from 'react';
import { connect } from 'react-redux';
import { removecart,loaditem } from '../../redux/shopping/shopaction';
const Basket = ({ cart, removecart, loaditem}) => {

  const [totalitems, settotalitems] = React.useState(0);
  const [totalprice, settotalprice] = React.useState(0);
  const [state, setstate] = React.useState(false);
  
  const hidecart = () => {
    if (!state) {
      document.querySelector('.basket').style.right = '-100%';
    }
  };
  React.useEffect(() => {
    let price = 0;
    let items = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    settotalprice(price);
    settotalitems(items);
  }, [cart, totalprice, totalitems, settotalitems, settotalprice]);
  return (
    <>
      <div className='top'>
        <h1>Cart</h1>
        <button className='times' onClick={hidecart}>
          {' '}
          X{' '}
        </button>
      </div>
      <div>
        {cart.map((item) => {
          const { id, img, price, names, maker, qty } = item;
          return (
            <>
              <div key={id} className='item' prop={item}>
                <div>
                  <img src={img} alt='' />
                </div>
                <div>
                  <span>{names}</span>
                  <br />
                  <h6>{maker}</h6>
                  <h5>${price}</h5>
                  <button onClick={() => removecart(id)}>remove item</button>
                </div>
                <div>
                  <label htmlFor='qty'>Qty</label>
                  <input type='number' name='qty' id='qty' value={qty} min='1' />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className='total'>
        <h2>Cart summary</h2>
        <div>
          <span>Total : ({totalitems} items)</span>
          <br />
          <br />
          <span>${totalprice}</span>
        </div>
        <button>proceed to checkout</button>
      </div>
    </>
  );
};
const maptoprops = (state) => {
  return {
    cart: state.shop.cart,
  };
};
const maptodelete = (dispatch) => {
  return {
    removecart: (id) => dispatch(removecart(id)),
    loaditem: (item) => dispatch(loaditem(item))
  };
};

export default connect(maptoprops, maptodelete)(Basket);
