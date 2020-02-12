import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
  margin-top: 10px;
`;

export const ProductContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 6px;
`;

export const FooterContent = styled.View`
  width: 100%;
  height: 45px;
  margin-top: 15px;
  background: ${lighten(0.12, '#ccc')};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FooterControl = styled.View`
  margin-left: 10px;
  height: 45px;
  flex-direction: row;
  align-items: center;
`;

export const AmountInput = styled.TextInput`
  width: 50px;
  height: 29px;
  background: white;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #000;
  padding-left: 10px;
`;

export const Total = styled.Text`
  margin-right: 10px;
  font-weight: bold;
  font-size: 17px;
`;
