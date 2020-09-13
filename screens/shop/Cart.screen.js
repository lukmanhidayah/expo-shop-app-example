import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../../components/shop/CartItem.component";
import Colors from "../../constants/Colors";
import { removeFromCart } from "../../store/actions/cart.action";

const Cart = (props) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    const transformedCarItems = [];
    for (const key in state.cart.items) {
      transformedCarItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCarItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{" "}
          <Text style={styles.amount}>${cartTotalAmount?.toFixed(2)}</Text>
        </Text>
        <Button
          color={Colors.accent}
          title={"Order Now"}
          disabled={cartItems.length === 0}
        />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onRemove={() => {
              dispatch(removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.accent,
  },
});
