import {
  REMOVE_FROM_CART,
  UPDATE_CART,
  ORDER_CONFIRMED
} from './action_types';


export const updateCart = (payload) => {
  if (payload === 'order-confirmed') {
    return {
      type: ORDER_CONFIRMED,
    };
  }

  return payload.quantity !== 0
    ? {
        type: UPDATE_CART,
        payload: payload,
      }
    : {
        type: REMOVE_FROM_CART,
        payload: payload.product.id,
      };
};
