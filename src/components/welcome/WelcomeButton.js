import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const WelcomeButton = (props) => {
  const {title, onMoveScreen, moveScreenNum, onMoveScreenGroup, moveScreenGroup, moveType} = props

  return (
    <TouchableOpacity 
      onPress={() => { 
        moveType === 'screen' ? onMoveScreen(moveScreenNum) : onMoveScreenGroup(moveScreenGroup)
    }}>
      <ImageBackground
        source={require('../../../assets/welcome/buttonbg.png')}
        style={styles.buttonView}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> {title} </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: 210,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    borderRadius: 35,
    overflow: 'hidden',
    borderBottomLeftRadius: 5,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
  },
});

export default WelcomeButton;
