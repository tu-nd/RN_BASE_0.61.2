import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import WHeader from "@app/components/WHeader";
import R from "@app/assets/R";
import { colors, OS } from "@app/constants/Theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import CVModal from "@app/components/CVModal";
import { SCREEN_ROUTER } from "@app/constants/Constant";
import NavigationUtil from "@app/navigation/NavigationUtil";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <WHeader titleHeader={R.strings.home} color={colors.headerTitle} />
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => {
              NavigationUtil.navigate(SCREEN_ROUTER.LOGIN);
            }}
            children={<Text>Login</Text>}
          />
        </SafeAreaView>
      </View>
    );
  }
}
