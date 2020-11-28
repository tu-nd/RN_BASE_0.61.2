import React, { Component } from "react";
import { Text, View, TouchableOpacity, Alert, Image } from "react-native";
import theme, { colors, fonts } from "@theme";
import R from "@R";

import DropdownAlertUtil from "@app/components/DropdownAlertUtil";
import OneSignal from "react-native-onesignal";
import WHeader from "@app/components/WHeader";
import FstImage from "@app/components/FstImage";
import NavigationUtil from "@app/navigation/NavigationUtil";
import { SCREEN_ROUTER } from "@app/constants/Constant";
export default class UserScreen extends Component {
  async componentDidMount() {}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WHeader titleHeader={R.strings.user} color={colors.headerTitle} />
        <TouchableOpacity
          onPress={() => {
            // NavigationUtil.navigate(SCREEN_ROUTER.)
            // OneSignal.getPermissionSubscriptionState(status => {
            //   userID = status.userId;
            //   DropdownAlertUtil.showAlert(
            //     "Thông báo",
            //     "DeviceID của OneSignal là : " + userID,
            //     () => {
            //       alert("tap action");
            //     }
            //   );
            // });
          }}
        >
          <Text style={[fonts.bold17]}>{R.strings.update_user_info}</Text>
          <FstImage
            source={R.images.ic_home}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
