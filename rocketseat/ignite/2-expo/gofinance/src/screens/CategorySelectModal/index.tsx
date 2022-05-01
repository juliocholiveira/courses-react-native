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

interface Category {
  key: string;
  name: string;
}
interface CategorySelectModalProps {
  category: Category;
  setCategory: (category: Category) => void;
  handleCloseCategorySelectModal: () => void;
}

export function CategorySelectModal({
  category,
  setCategory,
  handleCloseCategorySelectModal,
}: CategorySelectModalProps) {
  const handleSelectCategory = (categorySelected: Category) => {
    setCategory(categorySelected);
  };
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleSelectCategory(item)}
            isActive={category.key === item.key}
          >
            <CategoryIcon name={item.icon} />
            <CategoryTitle>{item.name}</CategoryTitle>
          </Category>
        )}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={handleCloseCategorySelectModal} />
      </Footer>
    </Container>
  );
}
