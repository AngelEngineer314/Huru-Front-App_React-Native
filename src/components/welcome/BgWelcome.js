import React from 'react';
import {View, Image, ImageBackground, StyleSheet, ScrollView} from 'react-native';


const BgWelcome = ({children, bottom}) => {

  const styles = StyleSheet.create({
    bgWelcome: {
      width: '100%',
      height: '100%',
      flex: 1,
      zIndex: -999,
    },
    topBg: {
      position:'absolute',
      top: '0%',
      width: '100%',
      zIndex: -999,
    },
    bottomBg: {
      position:'absolute',
      bottom: bottom,
      width: '100%',
      zIndex: -999,
    }
  });

  return (
    <View
      // source={require('../../../assets/welcome/welcomebg.png')}
      style={styles.bgWelcome}>
      <Image style={styles.topBg} source={require('../../../assets/auth/cloud.png')}/>
      <ScrollView>{children}</ScrollView>
      <Image style={styles.bottomBg} source={require('../../../assets/auth/ellipse.png')}/>
    </View>
  );
};

export default BgWelcome;
