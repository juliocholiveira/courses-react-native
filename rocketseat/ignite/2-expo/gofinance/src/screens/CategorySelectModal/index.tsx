import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  Title,
  Category,
  CategoryIcon,
  CategoryTitle,
  Footer,
  ItemSeparator,
} from "./styles";

import { Button } from "../../Form/Button";

import { categories } from "../../utils/categories";

export function CategorySelectModal() {
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category>
            <CategoryIcon name={item.icon} />
            <CategoryTitle>{item.name}</CategoryTitle>
          </Category>
        )}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  );
}
