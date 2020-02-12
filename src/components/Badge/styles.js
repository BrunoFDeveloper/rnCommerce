import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 4px;
  background: ${({ color }) => color};
  position: absolute;
  top: -8px;
  right: -1px;
  border-radius: 10px;
`;

export const TextContent = styled.Text`
  color: white;
  font-size: 10px;
`;
