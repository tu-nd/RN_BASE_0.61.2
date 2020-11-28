import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import HomeScreen from "@app/screens/customer/HomeScreen";
import NotificationScreen from "@app/screens/customer/NotificationScreen";
import UserScreen from "../screens/customer/UserScreen";
import { SCREEN_ROUTER } from "@constant";
import R from "@R";

import { Image } from "react-native";
import { Platform } from "react-native";
import { colors } from "@app/constants/Theme";

const tabbarIcons = {
  [SCREEN_ROUTER.HOME]: R.images.ic_home,
  [SCREEN_ROUTER.NOTIFICATION]: R.images.ic_noti,
  [SCREEN_ROUTER.USER]: R.images.ic_user
};
const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  const iconSource = tabbarIcons[routeName] || R.images.home;
  const iconSize = focused ? 25 : 22;
  return (
    <Image
      source={iconSource}
      fadeDuration={0}
      style={{ tintColor: tintColor, width: iconSize, height: iconSize }}
    />
  );
};
const Main = createBottomTabNavigator(
  {
    [SCREEN_ROUTER.HOME]: {
      screen: HomeScreen,
      title: R.strings.home,
      navigationOptions: {
        tabBarLabel: R.strings.home
      }
    },
    [SCREEN_ROUTER.NOTIFICATION]: {
      screen: NotificationScreen,
      title: R.strings.notification,
      navigationOptions: {
        tabBarLabel: R.strings.notification,
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={R.images.ic_noti}
            style={{
              width: focused ? 25 : 22,
              height: focused ? 25 : 22,
              position: "absolute",
              bottom: 8,
              tintColor: focused ? colors.active : "gray"
            }}
            resizeMode={"contain"}
          />
        )
      }
    },
    [SCREEN_ROUTER.USER]: {
      screen: UserScreen,
      title: R.strings.user,
      navigationOptions: {
        tabBarLabel: R.strings.user
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeBackgroundColor: colors.bottombarBg,
      inactiveBackgroundColor: colors.bottombarBg,
      inactiveTintColor: colors.inactive,
      activeTintColor: colors.active
    },
    tabBarComponent: props => {
      return (
        <BottomTabBar
          {...props}
          onTabPress={props.onTabPress}
          style={{
            borderTopColor: colors.borderTopColor,
            backgroundColor: colors.primary,
            height: 58
          }}
        />
      );
    },
    initialRouteName: "User"
  }
);
export default Main;
