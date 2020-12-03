import React from 'react';
import {View, Image, ImageBackground, StyleSheet, ScrollView} from 'react-native';


const BgQuestion = ({children, bottom}) => {

  const styles = StyleSheet.create({
    bgWelcome: {
      width: '100%',
      height: '100%',
      flex: 1,
    },
  });

  return (
    <ImageBackground
      source={require('../../../assets/welcome/welcomebg.png')}
      style={styles.bgWelcome}>
      <ScrollView>{children}</ScrollView>
    </ImageBackground>
  );
};

export default BgQuestion;
