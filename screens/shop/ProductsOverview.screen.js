import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/ProductItem.component";

const ProductsOverview = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

ProductsOverview.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductsOverview;

const styles = StyleSheet.create({});
