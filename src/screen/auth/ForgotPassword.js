import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import BgWelcome from '../../components/welcome/BgWelcome';
import InputField from '../../components/welcome/InputField';
import WelcomeButton from '../../components/welcome/WelcomeButton';
import { Right } from 'native-base';


const ForgotPassword = ( props ) => {
  const { onMoveScreen, onMoveScreenGroup } = props

  return (
    <>
      <BgWelcome bottom={'-9%'}>
        <SafeAreaView>
          <View style={styles.mainView}>
            <Image
              style={styles.image}
              source={require('../../../assets/auth/login_image.png')}
            />
            <View style={styles.titleView}>
                <Text style={styles.title}>Forgot password ?</Text>
            </View>
            <View style={styles.inputContainer}>
              <InputField placeholder="Enter Your e-mail" name="email" icon="mail"/>
            </View>
            <View style={styles.buttonView}>
              <WelcomeButton title="Send" onMoveScreenGroup={onMoveScreenGroup} moveScreenGroup="dashboard" moveType="group"/>
              <View style={styles.socialLoginView}>
                <Text style={styles.socialText}>Or Sign in with </Text>
                <View style={styles.socialOptions}>
                  <TouchableOpacity>
                    <Image
                      style={styles.socialIcon}
                      source={require('../../../assets/welcome/fb.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.socialIcon}
                      source={require('../../../assets/welcome/in.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.socialIcon}
                      source={require('../../../assets/welcome/gplus.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.socialIcon}
                      source={require('../../../assets/welcome/tw.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.navigateView}>
                <Text style={styles.alreadyText}>Don’t Have an account ?</Text>
                <TouchableOpacity onPress={() => onMoveScreen('signUp')}>
                  <Text style={styles.signInNav}> Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </BgWelcome>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    marginVertical: 40,
    fontFamily: 'Poppins'
  },
  image: {
    width: 334.42,
    height: 334.42,
    top: '4%'
  },
  titleView: {
    marginTop: 80,
    marginBottom: 20,
  },
  title: {
    color: '#F17720',
    fontSize: 26,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#D99462',
    fontSize: 12,
    lineHeight: 18,
    alignSelf: 'flex-end'
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 30,
  },
  navigateView: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginVertical: 20,
  },
  alreadyText: {
    color: '#000000',
    fontWeight: 'normal',
    fontFamily: 'poppins',
  },
  signInNav: {
    color: '#F17720',
    fontWeight: 'bold',
    fontFamily: 'poppins',
    fontSize: 16,
  },
  socialLoginView: {
    alignItems: 'center',
  },
  socialText: {
    fontFamily: 'poppins',
    color: '#000',
    paddingVertical: 20,
    fontSize: 16,
  },
  socialOptions: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
});

ForgotPassword.navigationOptions = navData => {
  return {
    header: () => null,
  };
};

export default ForgotPassword;
