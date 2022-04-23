import styled from "styled-components";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};

  padding: 18px 16px;
  margin-bottom: 8px;
  border-radius: 5px;
`;
