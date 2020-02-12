import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: ${colors.dark};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContent = styled.TouchableOpacity``;
export const LogoImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  margin-top: 15px;
  width: 185px;
  height: 24px;
  margin-bottom: 15px;
  margin-left: 10px;
`;

export const ContentCart = styled.TouchableOpacity`
  margin-top: 15px;
  margin-right: 20px;
  margin-bottom: 10px;
  position: relative;
`;
