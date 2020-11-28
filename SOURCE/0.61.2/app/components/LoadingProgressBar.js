import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Platform
} from "react-native";
import Modal from "react-native-modal";
import { BarIndicator } from "react-native-indicators";
import { colors, dimension, fonts } from "@app/constants/Theme";
export default class LoadingProgressBar extends Component {
  render() {
    const { isVisible, onBackdropPress, message } = this.props;
    const width = !!message ? 180 : 60;
    return (
      <Modal
        isVisible={true}
        avoidKeyboard
        onBackdropPress={onBackdropPress}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={100}
        animationOutTiming={100}
        backdropTransitionInTiming={100}
        backdropTransitionOutTiming={100}
      >
        <View style={{ alignSelf: "center" }}>
          <View
            style={[
              styles.contentStyle,
              {
                width: dimension.width * 0.35,
                paddingBottom: 8,
                paddingHorizontal: 8,
                height: dimension.width * 0.3,
                justifyContent: "center",
                alignItems: "center"
              }
            ]}
          >
            <BarIndicator color={colors.active} size={40} />
            <Text style={[fonts.regular14, { color: "black" }]}>
              {message || "Đang xử lý ..."}
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2E384D"
  },
  activityStyle: {
    padding: 16
  },
  messageStyle: {
    marginTop: 0,
    marginBottom: 16,
    color: "#2E384D"
  }
});
