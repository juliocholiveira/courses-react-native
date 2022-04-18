import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface Props {
  type: "up" | "down" | "total";
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};

  width: ${RFValue(300)}px;
  height: ${RFValue(200)}px;
  padding: 19px 24px;
  border-radius: 5px;
  margin-right: ${RFValue(16)}px;
`;

export const Header = styled.View<Props>`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(40)}px;

  ${({ theme, type }) =>
    type === "up" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `};
  ${({ theme, type }) =>
    type === "down" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `};
  ${({ theme, type }) =>
    type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `};
`;

export const Footer = styled.View<Props>`
  margin: ${RFValue(35)}px 0;
`;

export const Amount = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.title};
`;

export const LastTransaction = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
`;
