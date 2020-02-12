import React from 'react';
import PropTypes from 'prop-types';

import { Container, TextContent } from './styles';
import colors from '../../styles/colors';

export default function Badge({ number, color }) {
  return (
    <Container color={color}>
      <TextContent>{number}</TextContent>
    </Container>
  );
}

Badge.defaultProps = {
  color: colors.primary,
};

Badge.propTypes = {
  number: PropTypes.number.isRequired,
  color: PropTypes.string,
};
