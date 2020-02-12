import styled from 'styled-components/native';
import { lighten } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${lighten(0.02, colors.dark)};
  align-items: center;
  justify-content: center;
`;

export const CartBox = styled.View`
  width: 89%;
  background: white;
  border-radius: 4px;
  padding: 10px;
`;

export const ContentProducts = styled.ScrollView`
  width: 100%;
  height: 50%;
`;

export const TotalTitle = styled.Text`
  font-size: 18px;
  color: #ccc;
  text-transform: uppercase;
  text-align: center;
  margin-top: 30px;
  font-weight: bold;
`;

export const Total = styled.Text`
  font-size: 30px;
  color: #323232;
  font-weight: bold;
  text-align: center;
`;

export const FinishButton = styled(RectButton)`
  background: ${colors.primary};
  height: 45px;
  border-radius: 4px;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const FinishText = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
