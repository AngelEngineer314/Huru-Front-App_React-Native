import React, { Fragment } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AppHeader from '../../layout/header/AppHeader';
import BgWelcome from '../../components/welcome/BgWelcome';

const PlanScreen = (props) => {
  const { onMoveScreenGroup, onMoveTab, onMoveScreen } = props

  return (
    <View style={styles.planScreen}>
      <AppHeader title="PLANS" onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab} onMoveScreen={onMoveScreen} isPlanScreen={true}/>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.logoView}>
            <View style={styles.iconView}>
              <Image
                style={styles.icon}
                source={require('../../../assets/logo.png')}
              />
            </View>
            <Text style={styles.premium}>PREMIUM</Text>
          </View>
          <View style={styles.planView}>
            <View style={styles.planOne}>
              <Image
                style={styles.planImageOne}
                source={require('../../../assets/planOne.png')}
              />

              <Text style={styles.title}>Monthly</Text>
              <Text style={styles.planText}>NO ADS</Text>
              <Text style={styles.planText}>
                Unlimited Interviews
              </Text>
              <Text style={styles.price}>149.99 $</Text>
            </View>
            <View style={styles.planOne}>
              <Image
                style={styles.planImageTwo}
                source={require('../../../assets/planTwo.png')}
              />
              <Text style={styles.title}>Annualy</Text>
              <Text style={styles.planText}>NO ADS</Text>
              <Text style={styles.planText}>Unlimited Interviews</Text>
              <Text style={styles.price}>149.99 $</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  planScreen: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
  mainView: {
    position: 'relative',
    zIndex: 10,
    marginTop: 10,
    marginBottom: 150,
  },
  closeIconView: {
    alignItems: 'flex-end',
    shadowColor: "#000",
  }, 
  closeIcon: {
    padding: 20,
    fontSize: 30,
    color: '#013551',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  },
  logoView: {
    alignItems: 'center',
    position: 'relative',
  },
  iconView: {
    borderRadius: 999,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    // marginTop: 100,
    // left: '40%',
    // zIndex: 10,
    // position: "absolute",
  },
  icon: {
    width: 136,
    height: 56
  },
  premium: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    marginBottom: 20,
    color: '#013551',
  },
  planView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  planOne: {
    width: '45%',
    backgroundColor: '#ffffff',
    paddingVertical: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'column',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  planTwo: {
    width: '45%',
    backgroundColor: '#ffffff',
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'column',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  planImageOne: {
    width: 145.82,
    height: 133,
  },
  planImageTwo: {
    width: 157,
    height: 133,
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 20,
    color: '#F17720',
    marginVertical: 30,
  },
  planText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#013551',
  },
  termTwo: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#fff',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins',
    backgroundColor: '#ffffff',
    paddingHorizontal: 40,
    paddingVertical: 10,
    // marginHorizontal: ,
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
    color: '#013551',
    borderColor: '#013551',
    borderRadius: 30,
    borderWidth: 2
  },
  notificationView: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#E9E9E9',
  },
  notificationTitle: {
    color: '#F17720',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
  },
  notificationText: {
    fontFamily: 'Poppins',
    color: '#013551',
    fontFamily: 'Poppins',
  },
});

PlanScreen.navigationOptions = () => {
  return {
    header: () => (
      null
    ),
  };
};

export default PlanScreen;
