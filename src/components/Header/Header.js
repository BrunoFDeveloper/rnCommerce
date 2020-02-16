import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logoImg from '../../assets/img/logo.png';

import { Wrapper, LogoContent, LogoImage, ContentCart } from './styles';

import Badge from '../Badge/Badge';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Wrapper>
      <LogoContent onPress={() => navigation.navigate('Home')}>
        <LogoImage source={logoImg} />
      </LogoContent>
      <ContentCart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        {cartSize > 0 && <Badge number={cartSize} />}
      </ContentCart>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
