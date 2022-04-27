import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface TransactionTypeButtonProps {
  type?: "up" | "down";
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<TransactionTypeButtonProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  ${({ theme, type, isActive }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.successLight};
      border-color: ${({ theme }) => theme.colors.successLight};
    `};

  ${({ theme, type, isActive }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.attentionLight};
      border-color: ${({ theme }) => theme.colors.attentionLight};
    `};

  padding: 16px;
`;

// @ts-ignore
export const Icon = styled(Feather)<TransactionTypeButtonProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};

  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
