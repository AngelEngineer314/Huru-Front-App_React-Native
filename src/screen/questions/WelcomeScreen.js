import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import BgWelcome from '../../components/welcome/BgWelcome';
import WelcomeButton from '../../components/welcome/WelcomeButton';

const WelcomeScreen = ( props ) => {
  const { onMoveScreen } = props

  return (
    <BgWelcome bottom='-10%'>
      <SafeAreaView>
        <View style={styles.mainView}>
          <View style={styles.logoView}>
            {/* <Image style={styles.logo} source={require('./b.png')} /> */}
            <Image
              source={require('../../../assets/logo.png')}
              style={styles.logo}
            />
          </View>

          <View style={styles.imageView}>
            <Image
              style={styles.welcomeImage}
              source={require('../../../assets/welcome/welcome.png')}
            />
          </View>

          <View style={styles.textView}>
            <Text style={styles.welcomeText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </Text>
            <WelcomeButton title="GET STARTED" onMoveScreen={onMoveScreen} moveScreenNum={2} moveType={'screen'} />
          </View>
        </View>
      </SafeAreaView>
    </BgWelcome>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  logoView: {
    marginTop: 30,
  },
  logo: {
    // width: 300,
  },
  imageView: {},
  welcomeImage: {
    width: 350,
    marginVertical: 50,
    marginTop: 60,
  },
  textView: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'poppins',
  },
});

export default WelcomeScreen;
