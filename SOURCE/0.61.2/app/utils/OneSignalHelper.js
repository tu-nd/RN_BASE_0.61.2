const { default: OneSignal } = require("react-native-onesignal");
import Reactotron from "reactotron-react-native";

const onReceived = (notification, props) => {
  Reactotron.log("Notification received: ", notification);
}

const onOpened = (openResult, props) => {
  Reactotron.log("Message: ", openResult.notification.payload.body);
  Reactotron.log("Data: ", openResult.notification.payload.additionalData);
  Reactotron.log("isActive: ", openResult.notification.isAppInFocus);
  Reactotron.log("openResult: ", openResult);
}

const onIds = async device => {
  Reactotron.log("Device info: ", device);
};
module.exports = {
  initialization: (appId, props) => {
    OneSignal.init(appId);
    OneSignal.inFocusDisplaying(2);
    OneSignal.addEventListener("received", notification => {
      onReceived(notification, props);
    });
    OneSignal.addEventListener("opened", openResult => {
      onOpened(openResult, props);
    });
    OneSignal.addEventListener("ids", onIds);
  },
  destruction: () => {
    OneSignal.removeEventListener("received");
    OneSignal.removeEventListener("opened");
    OneSignal.removeEventListener("ids");
  },
};