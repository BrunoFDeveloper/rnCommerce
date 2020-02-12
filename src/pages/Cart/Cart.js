import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  CartBox,
  ContentProducts,
  TotalTitle,
  Total,
  FinishButton,
  FinishText,
} from './styles';

import ProductCart from '../../components/ProductCart/ProductCart';
import { formatPrice } from '../../util/format';

function Cart({ cart, total }) {
  return (
    <Container>
      <CartBox behavior="padding" enabled>
        {cart.length === 0 ? (
          <Total>Nenhum produto adicionado!</Total>
        ) : (
          <>
            <ContentProducts>
              {cart.map(product => (
                <ProductCart key={product.id} product={product} />
              ))}
            </ContentProducts>
            <TotalTitle>Total</TotalTitle>
            <Total>{total}</Total>
            <FinishButton disabled={cart.length === 0}>
              <FinishText>Finalizar pedido</FinishText>
            </FinishButton>
          </>
        )}
      </CartBox>
    </Container>
  );
}

Cart.defaultProps = {
  total: 0,
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  total: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce(
      (initialValue, { price, amount }) => initialValue + price * amount,
      0
    )
  ),
});

export default connect(mapStateToProps)(Cart);
