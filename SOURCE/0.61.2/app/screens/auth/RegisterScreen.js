import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export class RegisterScreen extends Component {
  render() {
    return (
      <View>
        <Text> RegisterScreen </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);
