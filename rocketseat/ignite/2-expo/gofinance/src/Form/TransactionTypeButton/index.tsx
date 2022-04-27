import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  type: "up" | "down";
  isActive: boolean;
}

export const TransactionTypeButton = ({ type, isActive, ...rest }: Props) => {
  const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
  };

  const title = {
    up: "Income",
    down: "Outcome",
  };

  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon name={icon[type]} type={type} />
      <Title>{title[type]}</Title>
    </Container>
  );
};
