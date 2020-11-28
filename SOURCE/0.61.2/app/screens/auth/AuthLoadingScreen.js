import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import NavigationUtil from "../../navigation/NavigationUtil";
import i18 from "@i18";
import { SCREEN_ROUTER } from "@app/constants/Constant";
import { ImageBackground } from "react-native";
import FastImage from "react-native-fast-image";
import R from "@app/assets/R";
import { colors, dimension } from "@app/constants/Theme";
import { BarIndicator } from "react-native-indicators";
import codePush from "react-native-code-push";

// import { connect } from 'react-redux'

export default class AuthLoadingScreen extends Component {
  state = {
    progress: {
      receivedBytes: 0,
      totalBytes: 1
    },
    isNeedUpdate: false
  };
  componentDidMount() {
    // load something and check login
    this._checkUpdate();
  }
  bootstrapAsync() {
    NavigationUtil.navigate(SCREEN_ROUTER.HOME);
  }
  checkCodePushVer = async () => {
    const IOS = 1,
      ANDROID = 2;
    const appVersion = DeviceInfo.getVersion();
    const code_push_version = await AsyncStorage.getItem(
      ASYNCSTORAGE_KEY.CODE_PUSH
    );
    const os = Platform.OS == "ios" ? IOS : ANDROID;

    callAPI({
      API: GetAppVersion,
      payload: os,
      onSuccess: res => {
        console.log("here!");
        const searchIndex = res.result
          .map(elem => elem.versionApp)
          .indexOf(appVersion);
        if (searchIndex != -1) {
          if (res.result[searchIndex].codePushVersion != code_push_version) {
            if (res.result[searchIndex].forceUpdate == 1) this._checkUpdate();
            else this._checkUpdateNotForceUpdate();
            AsyncStorage.setItem(
              ASYNCSTORAGE_KEY.CODE_PUSH,
              res.result[searchIndex].codePushVersion
            );
          } else this.bootstrapAsync();
        } else this.bootstrapAsync();
      },
      onError: err => {
        console.log(err);
        this.bootstrapAsync();
      }
    });
  };

  _checkUpdateNotForceUpdate = async () => {
    codePush
      .checkForUpdate()
      .then(update => {
        if (!update) {
          this.bootstrapAsync();
        } else {
          codePush.sync(
            {
              updateDialog: null,
              installMode: codePush.InstallMode.ON_NEXT_RESTART
            },
            status => {
              this.bootstrapAsync();
            },
            progress => {}
          );
        }
      })
      .catch(err => {
        console.log("error", error);
        codePush.allowRestart();
      });
  };
  _checkUpdate = async () => {
    codePush
      .checkForUpdate()
      .then(update => {
        console.log("here!");
        if (!update) {
          this.bootstrapAsync();
        } else {
          codePush.notifyAppReady();
          codePush.sync(
            {
              updateDialog: null,
              installMode: codePush.InstallMode.IMMEDIATE
            },
            status => {
              // reactotron.log(status);
              // if (
              //   status == codePush.SyncStatus.DOWNLOADING_PACKAGE ||
              //   status == codePush.SyncStatus.CHECKING_FOR_UPDATE ||
              //   status == codePush.SyncStatus.SYNC_IN_PROGRESS ||
              //   status == codePush.SyncStatus.INSTALLING_UPDATE
              // ) {
              // } else {
              // }
              // if (status == codePush.SyncStatus.UPDATE_INSTALLED) {
              //   codePush.allowRestart();
              // }
            },
            progress => {
              this.setState({
                progress,
                isNeedUpdate: true
              });
            }
          );
        }
      })
      .catch(err => {
        console.log("error", error);
        this.bootstrapAsync();
      });
    codePush.notifyAppReady();
  };
  render() {
    return (
      <ImageBackground
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center"
        }}
        // source={R.images.img_splash}
      >
        <StatusBar backgroundColor={colors.active} />
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: colors.active,
              marginBottom: 10,
              fontWeight: "bold",
              fontSize: 40
            }}
            children={"RN BASE"}
          />
          <View style={{ height: 50, width: 50 }}>
            <BarIndicator color={colors.active} style={{ height: 150 }} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
