import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignInScreen from "./src/screens/SignInScreen";
import ProfileScreen from "./src/screens/Profile";
import Header from "./src/shared/Header";

const screens = {
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerTitle: () => <Header />,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: () => <Header />,
    },
  },
};

const navigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    title: "",
    headerStyle: { backgroundColor: "#09a04f" },
  },
});

export default createAppContainer(navigator);
