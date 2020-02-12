import { all } from 'redux-saga/effects';
import cartSagas from './cart/sagas';

// Here goes the all sagas fathers
export default function* rootSaga() {
  yield all([cartSagas]);
}
