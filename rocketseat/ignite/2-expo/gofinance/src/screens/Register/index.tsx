import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

interface FormData {
  name: string;
  amount: number;
}

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório!"),
    amount: yup
      .number()
      .typeError("Tipo deve ser número!")
      .positive("Número deve ser positivo!"),
  })
  .required();

export function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              control={control}
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name?.message}
            />
            <InputForm
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount?.message}
            />
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
    </TouchableWithoutFeedback>
  );
}
