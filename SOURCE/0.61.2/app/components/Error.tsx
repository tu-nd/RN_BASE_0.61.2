import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ViewStyle,
  StyleProp
} from "react-native";
import R from "@app/assets/R";
import { StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { Icon } from "react-native-elements";
import { colors } from "@app/constants/Theme";
interface Props {
  reload: () => void;
  style?: StyleProp<ViewStyle>;
}
const { width, height } = Dimensions.get("window");
export default class Error extends Component<Props> {
  render() {
    const { reload, style } = this.props;
    return (
      <View
        style={[
          style,
          { flex: 1, justifyContent: "center", alignItems: "center" }
        ]}
      >
        <TouchableOpacity onPress={reload}>
          <Icon type="material" name="refresh" size={40} color={"red"} />
          <Text style={styles.textReload}>
            {"Đã có lỗi xảy ra! Vui lòng thử lại."}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: width / 2,
    height: width / 2,
    resizeMode: "contain"
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: "10%",
    paddingVertical: 12,
    borderRadius: 50
  },
  textReload: {
    marginTop: 10,
    fontFamily: R.fonts.roboto_medium,
    fontSize: 14,
    color: colors.primaryDark
  },
  description: {
    fontFamily: R.fonts.roboto_medium,
    fontSize: 16,
    color: colors.primaryDark,
    marginTop: 8,
    marginBottom: "10%"
  }
});
