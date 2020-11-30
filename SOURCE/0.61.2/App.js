/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from "react";
import codePush from "react-native-code-push";
import { connect, Provider } from "react-redux";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationUtil from "./app/navigation/NavigationUtil";
import store from "./app/redux/store";
import * as Sentry from '@sentry/react-native';
import OneSignalHelper from "@app/utils/OneSignalHelper";
import { APP_ID } from "@app/constants/Constant";


Sentry.init({
  dsn: 'https://c7abe834b0cf45b0b6a61a4e2129c935@o393004.ingest.sentry.io/5537410',
});

const AppContainer = connect(state => ({ state }), {
  ...require("@app/redux/actions")
})(props => {
  useEffect(() => {
    OneSignalHelper.initialization(APP_ID, props);
  }, [])
  return (
    <AppNavigator
      ref={navigatorRef =>
        NavigationUtil.setTopLevelNavigator(navigatorRef)
      }
    />
  )
})

const App = (props) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

MyApp = codePush(codePushOptions)(App);

export default MyApp;
