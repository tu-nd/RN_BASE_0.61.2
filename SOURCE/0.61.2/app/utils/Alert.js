import I18n from "../i18n/i18n";
import React, { Component } from "react";
import { Alert } from "react-native";

export const showConfirm = (title, content, action) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: "Huỷ",
        style: "cancel"
      },
      {
        text: title,
        onPress: action
      }
    ],
    { cancelable: false }
  );
};
export const showNoPhoneNumber = (title, content) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: "Cancel",
        style: "cancel"
      }
    ],
    { cancelable: false }
  );
};

export const showMessages = (title, content, action) => {
  setTimeout(() => {
    Alert.alert(
      title,
      content,
      [
        {
          text: "OK",
          onPress: action
        }
      ],
      { cancelable: false }
    );
  }, 100);
};
