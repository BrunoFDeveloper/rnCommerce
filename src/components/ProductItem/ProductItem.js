import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { addToCartRequest } from '../../store/modules/cart/actions';

import {
  Container,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  IconContent,
  TextIcon,
  TextButton,
} from './styles';

function ProductItem({ product, addToCartRequest, cartCount }) {
  return (
    <Container>
      <ProductImage source={{ uri: product.image }} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{product.priceFormatted}</ProductPrice>
      <ProductButton onPress={() => addToCartRequest(product.id)}>
        <IconContent>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          <TextIcon>{cartCount[product.id] || 0}</TextIcon>
        </IconContent>
        <TextButton>Adicionar</TextButton>
      </ProductButton>
    </Container>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    priceFormatted: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  addToCartRequest: PropTypes.func.isRequired,
  cartCount: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  cartCount: state.cart.reduce(
    (initialValue, product) => ({
      ...initialValue,
      [product.id]: product.amount,
    }),
    {}
  ),
});

export default connect(mapStateToProps, { addToCartRequest })(ProductItem);
