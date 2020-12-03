import React from 'react';
import {View, ImageBackground, StyleSheet, ScrollView} from 'react-native';

const BgPattern = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/welcome/welcomebg.png')}
      style={styles.bgWelcome}>
      <ScrollView>{children}</ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgWelcome: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});

export default BgPattern;
