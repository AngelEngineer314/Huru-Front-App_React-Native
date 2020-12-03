import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import AppHeader from '../../layout/header/AppHeader'
import HeaderOne from '../../components/HeaderOne';
import SettingsButton from '../../components/settings/SettingsButton'


const SettingScreen = props => {
  const { onMoveScreenGroup, onMoveTab, onMoveScreen } = props

  return (
    <View style={styles.root}>
      <AppHeader title="Settings" onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} onMoveScreen={onMoveScreen}/>
      <ScrollView>
        <SafeAreaView>
          {/* <ImageBackground
            source={require('../../../assets/welcome/welcomebg.png')}
            style={{width: '100%', height: '100%'}}> */}
            <View style={styles.mainView}>
              <View style={styles.buttonView}>
                <SettingsButton 
                  text="Profile"
                  icon="person-circle-sharp" 
                  backgroundColor="#ffffff" 
                  textColor="#013551" 
                  borderColor="#013551" 
                  onMoveScreen={onMoveScreen} 
                  moveScreen="Profile"
                />
                <SettingsButton 
                  text="Notifications"
                  icon="notifications" 
                  backgroundColor="#ffffff" 
                  textColor="#013551" 
                  borderColor="#013551" 
                  onMoveScreen={onMoveScreen} 
                  moveScreen="Notifications"
                />
                <SettingsButton 
                  text="Log Out"
                  icon="logout" 
                  backgroundColor="#ffffff" 
                  textColor="#013551" 
                  borderColor="#013551"
                  isMoveScreenGroup={true} 
                  onMoveScreenGroup={onMoveScreenGroup} 
                  moveScreen="auth"
                />
              </View>
              <View style={styles.premiumButtonView}>
                <View style={styles.premiumButton}>
                  <SettingsButton 
                    text="GO PREMIUM"
                    backgroundColor="#013551" 
                    textColor="#ffffff"
                    onMoveScreen={onMoveScreen} 
                    moveScreen="Premium"
                    borderColor="#ffffff"
                  />
                </View>
              </View>
            </View>
          {/* </ImageBackground> */}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%'
  },
  mainView: {
    marginBottom: '10%',
  },
  buttonView: {
    marginVertical: 60,
    alignItems: 'center',
    width: '100%',
  },
  premiumButtonView: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 120,
  },
  premiumButton: {},
});

SettingScreen.navigationOptions = () => {
  return {
    header: () => (
      <View>
        <HeaderOne screenName="Settings" />
      </View>
    ),
  };
};

export default SettingScreen;
