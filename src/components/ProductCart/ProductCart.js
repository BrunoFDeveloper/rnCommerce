import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import {
  updateAmountRequest,
  removeFromCart,
} from '../../store/modules/cart/actions';

import {
  Container,
  ProductContent,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  IconButton,
  FooterContent,
  FooterControl,
  AmountInput,
  Total,
} from './styles';

function ProductCart({ product, updateAmountRequest, removeFromCart }) {
  const { id, image, title, priceFormatted, amount } = product;
  return (
    <Container>
      <ProductContent>
        <ProductImage source={{ uri: image }} />
        <ProductInfo>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{priceFormatted}</ProductPrice>
        </ProductInfo>
        <IconButton onPress={() => removeFromCart(id)}>
          <Icon name="delete-forever" color={colors.primary} size={26} />
        </IconButton>
      </ProductContent>
      <FooterContent>
        <FooterControl>
          <IconButton>
            <Icon
              name="remove-circle-outline"
              color={colors.primary}
              size={24}
              onPress={() => updateAmountRequest(id, amount - 1)}
            />
          </IconButton>
          <AmountInput editable={false} value={String(amount)} />
          <IconButton onPress={() => updateAmountRequest(id, amount + 1)}>
            <Icon name="add-circle-outline" color={colors.primary} size={24} />
          </IconButton>
        </FooterControl>
        <Total>{product.subtotal}</Total>
      </FooterContent>
    </Container>
  );
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    priceFormatted: PropTypes.string,
    subtotal: PropTypes.string,
  }).isRequired,
};

export default connect(null, { updateAmountRequest, removeFromCart })(
  ProductCart
);
