import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import WHeader from "@app/components/WHeader";
import R from "@app/assets/R";
import theme, { colors } from "@app/constants/Theme";
import { TouchableOpacity } from "react-native";
import NavigationUtil from "@app/navigation/NavigationUtil";
import { SCREEN_ROUTER } from "@app/constants/Constant";
export class NotificationScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WHeader
          titleHeader={R.strings.notification}
          color={colors.headerTitle}
        />
        <SafeAreaView
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text children={'NotificationScreen'} />
          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => NavigationUtil.navigate(SCREEN_ROUTER.DETAIL_NOTI)}
            children={<Text children={'go to NotificationDetailScreen'} />} />
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
