import R from "@app/assets/R";
import { SCREEN_ROUTER } from "@app/constants/Constant";
import NavigationUtil from "@app/navigation/NavigationUtil";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

import { connect } from "react-redux";
class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <TouchableOpacity
            onPress={() => NavigationUtil.goBack()}
            style={{ position: "absolute", left: 20, top: 50 }}
          >
            <FastImage
              source={R.images.ic_back}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => NavigationUtil.navigate(SCREEN_ROUTER.AUTH_LOADING)}
            children={<Text> LoginScreen </Text>}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({});
