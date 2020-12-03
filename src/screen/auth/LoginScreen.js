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


const LoginScreen = ( props ) => {
  const { onMoveScreen, onMoveScreenGroup } = props

  return (
    <>
      <BgWelcome bottom='-10%'>
        <SafeAreaView>
          <View style={styles.mainView}>
            <Image
              style={styles.image}
              source={require('../../../assets/auth/login_image.png')}
            />
            <View style={styles.inputContainer}>
              <InputField placeholder="Your Email" name="username" icon="mail"/>
              <InputField
                placeholder="Your Password"
                name="password"
                secureTextEntry={true}
                icon="lock-closed"
              />
              <TouchableOpacity style={styles.forgotPasswordText} onPress={() => onMoveScreen('forgotPassword')}>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
              <WelcomeButton title="Login" onMoveScreenGroup={onMoveScreenGroup} moveScreenGroup="dashboard" moveType="group"/>
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
    fontFamily: 'Poppins',
    position: 'relative',
    zIndex: 10,
  },
  image: {
    width: 334.42,
    height: 334.42,
    top: '4%'
  },
  inputContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#D99462',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
    alignSelf: 'flex-end'
  },
  buttonView: {
    alignItems: 'center',
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

LoginScreen.navigationOptions = navData => {
  return {
    header: () => null,
  };
};

export default LoginScreen;
