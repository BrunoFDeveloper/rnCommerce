import styled from 'styled-components/native';
import { lighten } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${lighten(0.02, colors.dark)};
  align-items: center;
  flex-direction: row;
`;
