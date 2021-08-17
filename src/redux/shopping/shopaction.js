import * as actionTypes from './shoptype';

export const addtocart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};
export const removecart = (itemID) => {
  return {
    type: actionTypes.REMOVE_CART,
    payload: {
      id: itemID,
    },
  };
};
export const adjustqty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const loaditem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
