import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function ProductItem({ product }) {
  return (
    <Container>
      <ProductImage source={{ uri: product.image }} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>R$ 179,90</ProductPrice>
      <ProductButton>
        <IconContent>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          <TextIcon>1</TextIcon>
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
  }).isRequired,
};
