import { Alert } from 'react-native';
import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { ADD_TO_CART_REQUEST, UPDATE_AMOUNT_REQUEST } from './actionTypes';
import { addToCartSuccess, updateAmountSuccess } from './actions';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

function* addToCart({ payload: { id } }) {
  const response = yield call(api.get, `/products/${id}`);
  const existProduct = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);
  const amount = existProduct && existProduct.amount + 1;

  if (amount > stock.data.amount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (existProduct) {
    yield put(updateAmountSuccess(id, amount));
    return;
  }

  const data = {
    ...response.data,
    amount: 1,
    priceFormatted: formatPrice(response.data.price),
  };

  yield put(addToCartSuccess(data));
}

function* updateProductAmount({ payload: { id, amount } }) {
  if (amount === 0) return;

  const stock = yield call(api.get, `/stock/${id}`);

  if (amount > stock.data.amount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest(ADD_TO_CART_REQUEST, addToCart),
  takeLatest(UPDATE_AMOUNT_REQUEST, updateProductAmount),
]);
