import React, { useState } from "react";
import { Button } from "../../Form/Button";
import { CategorySelect } from "../../Form/CategorySelect";
import { Input } from "../../Form/Input";
import { TransactionTypeButton } from "../../Form/TransactionTypeButton";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";

type Type = null | "up" | "down";

export function Register() {
  const [active, setActive] = useState<Type>();

  const handleTransactionTypeSelect = (type: Type) => {
    setActive(type);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypes>
            <TransactionTypeButton
              type="up"
              onPress={() => handleTransactionTypeSelect("up")}
              isActive={active === "up"}
            />
            <TransactionTypeButton
              type="down"
              onPress={() => handleTransactionTypeSelect("down")}
              isActive={active === "down"}
            />
          </TransactionTypes>
          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="Entrar" />
      </Form>
    </Container>
  );
}
