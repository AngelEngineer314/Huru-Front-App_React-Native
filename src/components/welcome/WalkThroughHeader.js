import React, { useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const WalkThroughHeader = (props) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.numberView}>
        <Text style={styles.number}> {props.number} </Text>
      </View>
      <Image
        source={require("../../../assets/welcome/walkthroughtitleBg.png")}
        style={styles.bgImage}
      />
      <View style={styles.titleView}>
        <Text style={styles.title}> {props.title} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 20,
  },
  numberView: {
    alignItems: "flex-end",
  },
  number: {
    fontSize: 16,
    paddingVertical: 5,
    color: '#F17720',
  },
  bgImage: {
    width: '100%',
    height: 109,
    borderRadius: 25,
    zIndex: 1,
  },
  titleView: {
    marginTop: -110,
    zIndex: 10,
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    lineHeight: 28,
    paddingHorizontal: 40,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 20,
    fontFamily: 'poppins',
  },
});

export default WalkThroughHeader;
