import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  FlatList,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
  KeyboardAvoidingView
} from "react-native";
import Modal from "react-native-modal";
import { colors, dimension, fonts } from "@app/constants/Theme";
import LoadingProgressBar from "./LoadingProgressBar";
const OS = Platform.OS;

interface Props {
  title?: string;
  isVisible?: boolean;
  hide?: boolean;
  bottom?: boolean;
  isLoadingModal?: boolean;
  cancle?: boolean;
  noButton?: boolean;
  onBackdropPress: () => void;
  confirmPress: () => void;
  denyPress: () => void;
  listItem: React.ReactNode;
  styleTitle?: StyleProp<TextStyle>;
  confirmStyle?: StyleProp<TextStyle>;
}
export default class CVModal extends Component<Props> {
  render() {
    const {
      isVisible,
      onBackdropPress,
      listItem,
      bottom,
      title,
      styleTitle,
      confirmStyle,
      denyPress,
      confirmPress,
      isLoadingModal,
      hide,
      cancle,
      noButton
    } = this.props;
    const data = [
      { id: 0, status: "Chờ duyệt" },
      { id: 1, status: "Chấp nhận" },
      { id: 2, status: "Từ chối" }
    ];
    return (
      <Modal
        onBackdropPress={onBackdropPress}
        isVisible={isVisible}
        style={{
          margin: 0,
          justifyContent: bottom ? "flex-end" : "center",
          marginHorizontal: 10,
          marginBottom: OS == "android" ? 10 : 30
        }}
      >
        {isLoadingModal && <LoadingProgressBar />}
        <KeyboardAvoidingView
          style={{}}
          behavior={OS === "ios" ? "padding" : null}
          enabled
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 10
              // paddingBottom: 8,
              // paddingHorizontal: 2
            }}
          >
            <View
              style={{
                borderBottomWidth: 0.5,
                paddingVertical: 10,
                alignItems: "center",
                borderColor: "gray"
              }}
            >
              <Text style={[{ ...fonts.lato_medium20 }, styleTitle]}>
                {title}
              </Text>
            </View>

            <View
              style={{
                maxHeight: dimension.height * 0.4
              }}
            >
              {listItem}
            </View>
            {!bottom ? (
              !noButton ? (
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  {this.renderBt("Hủy", 0, denyPress)}
                  {this.renderBt("Xác nhận", 0.5, confirmPress)}
                </View>
              ) : (
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  {this.renderBt("OK", 0.5, confirmPress)}
                </View>
              )
            ) : null}
          </View>
        </KeyboardAvoidingView>

        {bottom && !hide && (
          <TouchableOpacity
            onPress={confirmPress}
            style={{
              backgroundColor: colors.white,
              alignItems: "center",
              marginTop: 10,
              borderRadius: 10,
              paddingVertical: 10
            }}
          >
            <Text style={{ ...fonts.lato_medium18, color: colors.black }}>
              {!cancle ? " Xác nhận" : "Huỷ"}
            </Text>
          </TouchableOpacity>
        )}
      </Modal>
    );
  }
  renderBt(title, borderRigh, onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          // width: dimension.width,
          borderTopWidth: 0.5,
          borderRightWidth: !this.props.noButton ? borderRigh : 0,
          paddingVertical: 10,
          borderColor: "gray"
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 15, color: "gray" }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
