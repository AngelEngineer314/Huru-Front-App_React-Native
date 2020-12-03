import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import InterviewDoneHeader from '../../layout/header/InterviewDoneHeader'
import CircleBar from '../../components/CircleBar';


const InterviewResultScreen = props => {
  const { onMoveTab } = props

  return (
    <View style={styles.container}>
      <InterviewDoneHeader />
      <View style={styles.resultView}>
        <View style={styles.logoView}>
          <View style={styles.iconView}>
            <Image
              style={styles.icon}
              source={require('../../../assets/tabNavBar/logo_navbar.png')}
            />
          </View>
          {/* <Text style={styles.resultText}>Results</Text> */}
        </View>
        <View>
          <View style={styles.charteView}>
            <View style={styles.chart}>
              <CircleBar
                percent={40}
                radius={30}
                borderWidth={7}
                color="#5772E7"
                shadowColor="#BDCFFC"
                bgColor="#F0F1F7"
                title="Expression 1"
              />
              <CircleBar
                percent={100}
                radius={30}
                borderWidth={7}
                color="#FF7A30"
                shadowColor="#FFB688"
                bgColor="#F2EEF0"
                title="Expression 4"
              />
              <CircleBar
                percent={30}
                radius={30}
                borderWidth={7}
                color="#00D05C"
                shadowColor="#A7DAC2"
                bgColor="#DEECE8"
                title="Expression 2"
              />
              <CircleBar
                percent={30}
                radius={30}
                borderWidth={7}
                color="#FE65DD"
                shadowColor="#F9C0ED"
                bgColor="#F1E9F6"
                title="Expression 3"
              />
            </View>
          </View>
          <View style={styles.moreButtonView}>
            <TouchableOpacity
              onPress={() => onMoveTab('analytics')}>
              <Text style={styles.buttonText}>More details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    // backgroundColor: '#000',
    width: '100%',
  },
  resultText: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'Poppins',
    marginBottom: 10,
    marginTop: 20,
  },
  resultView: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  logoView: {
    alignItems: 'center',
  },
  iconView: {
    borderRadius: 999,
    backgroundColor: '#fff',
    paddingHorizontal: 28,
    paddingVertical: 25,
    paddingLeft: 32,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    marginTop: -60,
  },
  icon: {
    width: 35,
    height: 41,
  },
  charteView: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moreButtonView: {
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonText: {
    backgroundColor: '#F5B771',
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderRadius: 30,
    overflow: 'hidden',
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
});

InterviewResultScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default InterviewResultScreen;
