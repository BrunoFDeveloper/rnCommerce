import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logoImg from '../../assets/img/logo.png';

import { Wrapper, LogoContent, LogoImage, ContentCart } from './styles';

import Badge from '../Badge/Badge';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <LogoContent onPress={() => navigation.navigate('Home')}>
        <LogoImage source={logoImg} />
      </LogoContent>
      <ContentCart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <Badge number={1} />
      </ContentCart>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
