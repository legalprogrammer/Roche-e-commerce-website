import React from 'react';
import { connect } from 'react-redux';
import { removecart, loaditem } from '../../redux/shopping/shopaction';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

toast.configure();
const Checkout = ({ cart, removecart }) => {
  const [totalitems, settotalitems] = React.useState(0);
  const [totalprice, settotalprice] = React.useState(0);
  const [checker, setstate] = React.useState(false);

  const checkclose = () => {
    if (!checker) {
      document.querySelector('.checkout').style.left = '-100%';
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

  async function handletoken(token) {
    const response = await axios.post(
      'https://n9mx6.sse.codesandbox.io/checkout',
      { token }
    );
    const { status } = response.data;
    if (status === 'success') {
      toast('success ! check email for details', { type: 'success' });
    }else{
      toast('something went wrong', { type: 'error' });
    }
  }
  return (
    <>
      <div className='top'>
        <h1>Roche Wears</h1>
        <button className='times' onClick={checkclose}>
          {' '}
          X{' '}
        </button>
      </div>
      <div className='cart'>
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
                  <input
                    type='number'
                    name='qty'
                    id='qty'
                    value={qty}
                    min='1'
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <main>
        <div className='total'>
          <h2>Payment</h2>
          <div>
            <h4>Total : ({totalitems} items)</h4>
            <h4>Total price : ${totalprice}</h4>
          </div>
          <StripeCheckout
            stripeKey='pk_test_51JUYaLDpxz7L9qSziWceh9stgwLkg9uVtJQgUdGlXKZPHW94273rD6zyHLF7MgDpwWi5VWHSFfj7hbCtUj86MbgW00EeDFDVRc'
            token={handletoken}
            amount={totalprice * 100}
            shippingAddress
            billingAddress
            name={`Roche wears: ${totalitems} items`}
          />
        </div>
        <div>
        </div>
      </main>
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
    loaditem: (item) => dispatch(loaditem(item)),
  };
};

export default connect(maptoprops, maptodelete)(Checkout);
