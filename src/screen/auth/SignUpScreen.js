import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import BgWelcome from "../../components/welcome/BgWelcome";
import InputField from "../../components/welcome/InputField";
import WelcomeButton from "../../components/welcome/WelcomeButton";

const SignUpScreen = (props) => {
  const { onMoveScreen } = props

  return (
    <>
      <BgWelcome bottom={'-17%'}>
        <SafeAreaView>
          <View style={styles.mainView}>
            <Image
              style={styles.image}
              source={require("../../../assets/auth/signup_image.png")}
            />
            <View style={styles.inputContainer}>
              <InputField placeholder="Your Name" />
              <InputField placeholder="Your Email" />
              <InputField placeholder="Your Password" secureTextEntry={true} />
              <InputField
                placeholder="Retype Your Password"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.buttonView}>
              <WelcomeButton title="Signup" onPress={() => onMoveScreen('login')} />
              <View style={styles.navigateView}>
                <Text style={styles.alreadyText}>
                  Already have an account ?
                </Text>
                <TouchableOpacity onPress={() => onMoveScreen('login')}>
                  <Text style={styles.signInNav}> Sign in</Text>
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
    alignItems: "center",
    marginVertical: 40,
  },
  image: {
    width: 286.39,
    height: 281.12,
    top: 50,
  },
  inputContainer: {
    marginTop: 80,
    alignItems: "center",
  },
  buttonView: {
    alignItems: "center",
  },
  navigateView: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginVertical: 20,
  },
  alreadyText: {
    color: "#000000",
    fontWeight: "normal",
    fontFamily: "poppins",
  },
  signInNav: {
    color: "#F17720",
    fontWeight: "bold",
    fontFamily: "poppins",
  },
});

SignUpScreen.navigationOptions = (navData) => {
  return {
    header: () => null,
  };
};

export default SignUpScreen;
