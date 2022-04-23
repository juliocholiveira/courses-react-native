import React from "react";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: String;
}

import { Container, Text } from "./styles";

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
