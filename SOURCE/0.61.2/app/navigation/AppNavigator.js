import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import AuthLoadingScreen from "../screens/auth/AuthLoadingScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import HomeScreen from "@app/screens/customer/home/HomeScreen";
import NotificationScreen from "@app/screens/customer/notification/NotificationScreen";
import UserScreen from "../screens/customer/user/UserScreen";
import { SCREEN_ROUTER } from "@constant";
import R from "@R";
import * as theme from "@theme";

import { Image } from "react-native";
import Main from "./MainTabNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      [SCREEN_ROUTER.AUTH_LOADING]: AuthLoadingScreen,
      [SCREEN_ROUTER.MAIN]: Main
    },
    {
      initialRouteName: SCREEN_ROUTER.AUTH_LOADING
    }
  )
);
