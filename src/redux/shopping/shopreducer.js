import * as actionTypes from './shoptype';
import silver from '../../components/pictures/k5.jpg';
import glass from '../../components/pictures/k3.jpg';
import james from '../../components/pictures/k4.jpg';
import red from '../../components/pictures/k7.jpg';
import yellow from '../../components/pictures/k10.jpg';
import corus from '../../components/pictures/kl1.png';
import ama1 from '../../components/pictures/m6.jpg';
import ama2 from '../../components/pictures/m7.jpg';
import ama3 from '../../components/pictures/m8.jpg';
import ama4 from '../../components/pictures/v4.jpg';
import ama5 from '../../components/pictures/vi1.jpg';
import ama6 from '../../components/pictures/kl7.jpg';
import ama7 from '../../components/pictures/kl6.jpg';
import belt from '../../components/pictures/a4.jpg';
import ponch from '../../components/pictures/a15.jpg';
import coat from '../../components/pictures/a5.jpg';
import oil from '../../components/pictures/a8.jpg';

const intialState = {
  products: [
    {
      id: 1,
      img: silver,
      names: 'Bugee Hoodie',
      price: '599',
      maker: 'DEEPTI',
      classname: 'new',
    },
    {
      id: 2,
      maker: 'MA+',
      names: 'Black Leather bag',
      price: '699',
      img: glass,
      classname: 'exclusive',
    },
    {
      id: 3,
      classname: 'designer',
      img: james,
      names: 'James lucent dress',
      price: '968',
      maker: 'JAMES KEARNS FOR LUCENTEMENT',
    },
    {
      id: 4,
      img: coat,
      classname: 'new',
      names: 'ALPACA LONG COAT',
      price: '1799',
      maker: 'CEDRIC JACQUEMYN',
    },
    {
      id: 5,

      img: ponch,
      classname: 'new',
      names: 'RETHEAL FOLDING POUCH',
      price: '229',
      maker: 'DEEPTI',
    },
    {
      id: 6,
      img: belt,
      classname: 'exclusive',
      names: 'CRUX BUCKLE BELT',
      price: '495',
      maker: 'DEEPTI',
    },
    {
      id: 7,
      img: red,
      classname: 'designer',
      names: 'DORSAL LEATHER JACKET',
      maker: 'ISAAC SELLAM',
      price: '1792',
    },
    {
      id: 8,
      img: yellow,
      classname: 'jacket',
      names: 'DORSAL JACKET',
      maker: 'ISAAC SELLAM',
      price: '1792',
    },
    {
      id: 9,
      img: oil,
      classname: 'jacket',
      names: 'DORSAL KHAKI OIL LEATHER JACKET',
      maker: 'ISAAC SELLAM',
      price: '1792',
    },
    {
      id: 10,
      img: corus,
      classname: 'bags',
      names: 'wende Shirt',
      price: '589',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 11,
      img: ama1,
      classname: 'bags',
      names: 'Black wende Hoodie',
      price: '589',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 12,
      img: ama2,
      classname: 'bags',
      names: 'Black wende Hoodie',
      price: '889',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 13,
      img: ama3,
      classname: 'bags',
      names: 'Black wende Hoodie',
      price: '899',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 14,
      img: ama4,
      classname: 'bags',
      names: 'Navy Blue wende Hoodie',
      price: '679',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 15,
      img: ama5,
      classname: 'bags',
      names: 'Navy Blue wende Hoodie',
      price: '589',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 16,
      img: ama6,
      classname: 'bags',
      names: 'Wende Hoodie',
      price: '589',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 17,
      img: ama7,
      classname: 'bags',
      names: 'Gray Wende Hoodie',
      price: '589',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 18,
      img: corus,
      classname: 'bags',
      names: 'Wende white shirt',
      price: '289',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 19,
      img: corus,
      classname: 'bags',
      names: 'Wende white shirt - new version',
      price: '389',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 20,
      img: corus,
      classname: 'bags',
      names: 'Wende white shirt-old version',
      price: '589',
      maker: 'ESDE FOR LUCENTEMENT',
    },
    {
      id: 21,
      img: corus,
      classname: 'bags',
      names: 'Wende white shirt-limited edition',
      price: '589',
      maker: 'ESDE FOR LUCENTEMENT',
    },
  ],
  cart: [],
  currentitems: null,
};

const shopreducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const incart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: incart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentitems: action.payload,
      };
    default:
      return state;
  }
};

export default shopreducer;
