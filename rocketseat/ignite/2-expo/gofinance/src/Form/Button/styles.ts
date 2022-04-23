import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary};

  padding: ${RFValue(16)}px;
  border-radius: 5px;

  align-items: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
