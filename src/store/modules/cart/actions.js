import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  UPDATE_AMOUNT_REQUEST,
  UPDATE_AMOUNT_SUCCESS,
  REMOVE_FROM_CART,
} from './actionTypes';

export function addToCartRequest(id) {
  return { type: ADD_TO_CART_REQUEST, payload: { id } };
}

export function addToCartSuccess(product) {
  return { type: ADD_TO_CART_SUCCESS, payload: { product } };
}

export function updateAmountRequest(id, amount) {
  return { type: UPDATE_AMOUNT_REQUEST, payload: { id, amount } };
}

export function updateAmountSuccess(id, amount) {
  return { type: UPDATE_AMOUNT_SUCCESS, payload: { id, amount } };
}

export function removeFromCart(id) {
  return { type: REMOVE_FROM_CART, payload: { id } };
}
