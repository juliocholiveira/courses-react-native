import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";

import { Button } from "../../Form/Button";
import { CategorySelect } from "../../Form/CategorySelect";
import { InputForm } from "../../Form/InputForm";
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

type Type = null | "up" | "down" | null;

type FormData = {
  name: string;
  amount: string;
};

export function Register() {
  const { control, handleSubmit } = useForm();

  const [active, setActive] = useState<Type>();
  const [openModal, setOpenModal] = useState(false);
  const [transactionType, setTransactionType] = useState<Type>();
  const [category, setCategory] = useState({
    key: "categoria",
    name: "categoria",
  });

  const handleTransactionTypeSelect = (type: Type) => {
    setTransactionType(type);
    setActive(type);
  };

  const handleOpenCategorySelectModal = () => {
    setOpenModal(true);
  };

  const handleCloseCategorySelectModal = () => {
    setOpenModal(false);
  };

  const handleRegister = handleSubmit((data) => {
    const dataForm = {
      name: data.name,
      amount: data.amount,
      transactionType,
      category: category.key,
    };
    console.log(dataForm);
  });

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm control={control} name="name" placeholder="Nome" />
          <InputForm control={control} name="amount" placeholder="Preço" />
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
        <Button title="Enviar" onPress={handleRegister} />
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
