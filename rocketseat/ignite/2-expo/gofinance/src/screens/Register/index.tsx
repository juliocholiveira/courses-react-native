import React, { useState } from "react";
import { Modal } from "react-native";
import { Button } from "../../Form/Button";
import { CategorySelect } from "../../Form/CategorySelect";
import { Input } from "../../Form/Input";
import { TransactionTypeButton } from "../../Form/TransactionTypeButton";
import { CategorySelectModal } from "../CategorySelectModal";
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
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState({
    key: "categoria",
    name: "categoria",
  });

  const handleTransactionTypeSelect = (type: Type) => {
    setActive(type);
  };

  const handleOpenCategorySelectModal = () => {
    setOpenModal(true);
  };

  const handleCloseCategorySelectModal = () => {
    setOpenModal(false);
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
          <CategorySelect
            title={category.name}
            onPress={handleOpenCategorySelectModal}
          />
        </Fields>
        <Button title="Entrar" />
      </Form>

      <Modal visible={openModal}>
        <CategorySelectModal
          category={category}
          setCategory={setCategory}
          handleCloseCategorySelectModal={handleCloseCategorySelectModal}
        />
      </Modal>
    </Container>
  );
}
