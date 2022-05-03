import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
  padding: 0px 8px;
  margin-bottom: 8px;
`;
