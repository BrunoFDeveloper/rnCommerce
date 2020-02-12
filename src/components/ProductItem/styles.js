import styled from 'styled-components/native';
import { darken } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 10px;
  width: 240px;
  height: 420px;
  background: white;
  border-radius: 4px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 220px;
  height: 200px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.Text`
  align-self: flex-start;
  font-size: 15px;
  color: #222;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 22px;
  color: #000;
  font-weight: bold;
  align-self: flex-start;
`;

export const ProductButton = styled(RectButton)`
  background: ${colors.primary};
  height: 50px;
  width: 100%;
  margin-top: auto;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const IconContent = styled.View`
  width: 60px;
  background: ${darken(0.15, colors.primary)};
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextIcon = styled.Text`
  margin-left: 5px;
  font-size: 18px;
  color: white;
`;

export const TextButton = styled.Text`
  margin: 0 auto;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
`;
