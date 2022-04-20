import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HightlightCard } from "../../components/HightlightCard";
import { TransactionCard } from "../../components/TransactionCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HightlightCards,
  TransactionCards,
  TransactionList,
  Title,
} from "./styles";

export const Dashboard = () => {
  const data = [
    {
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      type: "negative",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "10/04/2020",
    },
    {
      type: "negative",
      title: "Aluguel apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: "Compras",
        icon: "shopping-bag",
      },
      date: "13/04/2020",
    },
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/10158255?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Júlio</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HightlightCards>
        <HightlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.000,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HightlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HightlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HightlightCards>

      <TransactionCards>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        ></TransactionList>
      </TransactionCards>
    </Container>
  );
};
