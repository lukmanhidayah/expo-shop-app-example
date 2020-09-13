import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import ProductsOverview from "../screens/shop/ProductsOverview.screen";
import ProductDetail from "../screens/shop/ProductDetail.screen";
import Cart from "../screens/shop/Cart.screen";

import Colors from "../constants/Colors";
const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverview,
    ProductDetail: ProductDetail,
    Cart: Cart,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
    },
  }
);

export default createAppContainer(ProductsNavigator);
