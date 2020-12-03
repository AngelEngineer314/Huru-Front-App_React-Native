import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AppSubHeader from '../../layout/header/AppSubHeader';
import SettingsButton from '../../components/settings/SettingsButton'

const ProfileScreen = (props) => {
  const { onMoveScreen } = props

  return (
    <View style={styles.root}>
      <AppSubHeader title="Profile" onMoveScreen={onMoveScreen} moveScreen="Settings"/>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.profileCard}>
            {/* <Image
              style={styles.profilePic}
              source={require('../../../assets/header/profile.jpg')}
            /> */}
            <FontAwesome5 name="plus" size={50} color="#455A64" style={styles.chooseImageIcon}/>
            <Text style={styles.name}>John Doe</Text>
            {/* <View style={styles.countryView}>
              <Text style={styles.countryText}>Country : </Text>
              <Image
                style={styles.countryFlag}
                source={require('../../../assets/flag.jpg')}
              />
              <Text style={styles.countryName}> USA </Text>
            </View> */}
          </View>
        </View>
        <View style={styles.premiumButtonView}>
          <View style={styles.premiumButton}>
            <SettingsButton 
              text="GO PREMIUM"
              backgroundColor="#013551" 
              textColor="#ffffff"
              onMoveScreen={onMoveScreen} 
              moveScreen="Plan"
              borderColor="#ffffff"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  mainView: {
    width: '70%',
    minWidth: 300,
    paddingVertical: 60,
    marginVertical: 80,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  chooseImageIcon: {
    backgroundColor: '#F0F2F7',
    paddingHorizontal: 40,
    paddingVertical: 35,
    borderRadius: 999,
  },
  profileCard: {
    alignItems: 'center',
    borderRadius: 5,
    // backgroundColor: 'green',
  },
  name: {
    fontFamily: 'Poppins',
    color: '#F17720',
    fontWeight: '700',
    fontSize: 22,
    paddingVertical: 15,
  },
  countryView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 999,
  },
  countryText: {
    fontFamily: 'Poppins',
    paddingHorizontal: 5,
  },
  countryName: {
    fontFamily: 'Poppins',
    paddingHorizontal: 5,
  },
  countryFlag: {
    width: 20,
    height: 15,
    paddingHorizontal: 5,
  },
  premiumButtonView: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 120,
  },
  premiumButton: {},
});

ProfileScreen.navigationOptions = () => {
  return {
    header: () => (
      <View>
        <HeaderTwo screenName="Profile" />
      </View>
    ),
  };
};

export default ProfileScreen;
