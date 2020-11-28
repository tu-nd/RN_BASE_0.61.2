import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  RefreshControl
} from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import { colors, dimension, fonts } from "@app/constants/Theme";
import R from "@app/assets/R";
const { width, height } = Dimensions.get("window");
interface EmptyProps {
  header?: JSX.Element;
  sourceImage?: Source | number;
  description?: string;
  marginTop?: number;
  onRefresh: () => void;
}

export default class Empty extends Component<EmptyProps> {
  state = {
    marginTop: height / 5
  };
  render() {
    const {
      header,
      sourceImage,
      description,
      marginTop,
      onRefresh
    } = this.props;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
      >
        <View
          onLayout={event => {
            const result = header
              ? event.nativeEvent.layout.height / 2
              : event.nativeEvent.layout.height;
            this.setState({ marginTop: result });
          }}
          style={{
            marginTop: marginTop ? marginTop : this.state.marginTop,
            alignItems: "center",
            backgroundColor: colors.white,
            justifyContent: "center"
          }}
        >
          <FastImage
            source={sourceImage || R.images.img_empty}
            style={styles.imageEmpty}
            resizeMode="contain"
          >
            <Text style={styles.textEmpty}>
              {description || "Danh sách trống!"}
            </Text>
          </FastImage>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageEmpty: {
    width: width / 2,
    height: width / 2
  },
  textEmpty: {
    color: colors.active,
    marginTop: 10,
    position: "absolute",
    bottom: dimension.width * 0.05,
    alignSelf: "center",
    ...fonts.quicksand_light16
  }
});
