import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverview = () => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

ProductsOverview.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductsOverview;

const styles = StyleSheet.create({});
