import {
  ADD_TO_CART_SUCCESS,
  UPDATE_AMOUNT_SUCCESS,
  REMOVE_FROM_CART,
} from './actionTypes';

const INITIAL_STATE = [];

export default function cartReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ADD_TO_CART_SUCCESS:
      return [...state, payload.product];

    case UPDATE_AMOUNT_SUCCESS:
      return state.map(product =>
        product.id === payload.id
          ? { ...product, amount: payload.amount }
          : product
      );

    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== payload.id);

    default:
      return state;
  }
}
