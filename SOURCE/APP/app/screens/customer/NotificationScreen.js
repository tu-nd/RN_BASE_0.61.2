import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import WHeader from "@app/components/WHeader";
import R from "@app/assets/R";
import theme from "@app/constants/Theme";
export class NotificationScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WHeader
          titleHeader={R.strings.user}
          color={theme.colors.headerTitle}
        />
        <SafeAreaView
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text> NotificationScreen </Text>
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
)(NotificationScreen);
