import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import WHeader from "@app/components/WHeader";
import R from "@app/assets/R";
import theme from "@app/constants/Theme";
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <WHeader
          titleHeader={R.strings.user}
          color={theme.colors.headerTitle}
        />
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>RNCA Home </Text>
        </SafeAreaView>
      </View>
    );
  }
}
