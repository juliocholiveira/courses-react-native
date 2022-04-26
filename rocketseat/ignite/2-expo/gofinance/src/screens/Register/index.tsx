import React from "react";
import { Button } from "../../Form/Button";
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

export function Register() {
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
            <TransactionTypeButton type="up" />
            <TransactionTypeButton type="down" />
          </TransactionTypes>
        </Fields>
        <Button title="Entrar" />
      </Form>
    </Container>
  );
}
