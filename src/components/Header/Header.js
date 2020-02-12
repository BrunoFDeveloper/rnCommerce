import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logoImg from '../../assets/img/logo.png';

import { Wrapper, LogoContent, LogoImage, ContentCart } from './styles';

import Badge from '../Badge/Badge';

function Header({ navigation, cartCount }) {
  return (
    <Wrapper>
      <LogoContent onPress={() => navigation.navigate('Home')}>
        <LogoImage source={logoImg} />
      </LogoContent>
      <ContentCart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        {cartCount > 0 && <Badge number={cartCount} />}
      </ContentCart>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  cartCount: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartCount: state.cart.length || 0,
});

export default connect(mapStateToProps)(Header);
