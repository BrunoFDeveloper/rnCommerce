import React from 'react';
import { useSelector } from 'react-redux';

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

function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (initialValue, { price, amount }) => initialValue + price * amount,
        0
      )
    )
  );

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

export default Cart;
