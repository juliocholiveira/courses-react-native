import React from "react";
import { View } from "react-native";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

export function HightlightCard({
  title,
  amount,
  lastTransaction,
  type,
}: Props) {
  const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign",
  };

  return (
    <Container type={type}>
      <Header type={type}>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type}></Icon>
      </Header>
      <Footer type={type}>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
