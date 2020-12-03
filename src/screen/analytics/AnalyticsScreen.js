import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Row, Col } from 'react-native-responsive-grid-system';
import HeaderOne from '../../components/HeaderOne';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import AppHeader from '../../layout/header/AppHeader'
import CircleBar from '../../components/CircleBar';

const AnalyticsScreen = props => {
  const { onMoveScreenGroup, onMoveTab, onMoveScreen } = props

  return (
    <View style={{backgroundColor: '#fff'}}>
      <AppHeader title="Analytics" onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab}/>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.mainView}>
            <Text style={styles.pageTitle}>InterView results</Text>
            <View style={styles.interViewCardOne}>
              <View style={styles.cardTitleVIew}>
                <View style={styles.cardTitleLeft}>
                  <Text style={styles.title}>Job Interview</Text>
                  <Text style={styles.subTitle}>Good Result</Text>
                </View>
                <View style={styles.cardTitleRight}>
                  <MaterialIcon color="#414760" size={14} name="access-time" />
                  <Text style={styles.time}>02.35 am</Text>
                </View>
              </View>
              <View style={styles.charteView}>
                <View style={styles.chart}>
                  <Row>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={40}
                        radius={35}
                        borderWidth={7}
                        color="#5772E7"
                        shadowColor="#BDCFFC"
                        bgColor="#F0F1F7"
                        title="Expression 1"
                      />
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={30}
                        radius={35}
                        borderWidth={7}
                        color="#00D05C"
                        shadowColor="#A7DAC2"
                        bgColor="#DEECE8"
                        title="Expression 2"
                      />
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={30}
                        radius={35}
                        borderWidth={7}
                        color="#FE65DD"
                        shadowColor="#F9C0ED"
                        bgColor="#F1E9F6"
                        title="Expression 3"
                      />
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={100}
                        radius={35}
                        borderWidth={7}
                        color="#FF7A30"
                        shadowColor="#FFB688"
                        bgColor="#F2EEF0"
                        title="Expression 4"
                      />
                    </Col>
                  </Row>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => onMoveScreen('AnalyticsDetails')}>
                <View style={styles.buttonViewOne}>
                  <Text style={styles.buttonOne}>Details</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.interViewCardTwo}>
              <View style={styles.cardTitleVIew}>
                <View style={styles.cardTitleLeft}>
                  <Text style={styles.title}>Job Interview</Text>
                  <Text style={styles.subTitle}>Good Result</Text>
                </View>
                <View style={styles.cardTitleRight}>
                  <MaterialIcon color="#414760" size={14} name="access-time" />
                  <Text style={styles.time}>02.35 am</Text>
                </View>
              </View>
              <View style={styles.charteView}>
                <View style={styles.chart}>
                  <Row>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={40}
                        radius={35}
                        borderWidth={7}
                        color="#5772E7"
                        shadowColor="#BDCFFC"
                        bgColor="#F0F1F7"
                        title="Expression 1"
                      />
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={30}
                        radius={35}
                        borderWidth={7}
                        color="#00D05C"
                        shadowColor="#A7DAC2"
                        bgColor="#DEECE8"
                        title="Expression 2"
                      />
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={30}
                        radius={35}
                        borderWidth={7}
                        color="#FE65DD"
                        shadowColor="#F9C0ED"
                        bgColor="#F1E9F6"
                        title="Expression 3"
                      />
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={100}
                        radius={35}
                        borderWidth={7}
                        color="#FF7A30"
                        shadowColor="#FFB688"
                        bgColor="#F2EEF0"
                        title="Expression 4"
                      />
                    </Col>
                  </Row>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => onMoveScreen('AnalyticsDetails')}>
                <View style={styles.buttonViewTwo}>
                  <Text style={styles.buttonTwo}>Details</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.interViewCardThree}>
              <View style={styles.cardTitleVIew}>
                <View style={styles.cardTitleLeft}>
                  <Text style={styles.title}>Job Interview</Text>
                  <Text style={styles.subTitle}>Good Result</Text>
                </View>
                <View style={styles.cardTitleRight}>
                  <MaterialIcon color="#414760" size={14} name="access-time" />
                  <Text style={styles.time}>02.35 am</Text>
                </View>
              </View>
              <View style={styles.charteView}>
                <View style={styles.chart}>
                  <Row>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={40}
                        radius={35}
                        borderWidth={7}
                        color="#5772E7"
                        shadowColor="#BDCFFC"
                        bgColor="#F0F1F7"
                        title="Expression 1"
                      />
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={30}
                        radius={35}
                        borderWidth={7}
                        color="#00D05C"
                        shadowColor="#A7DAC2"
                        bgColor="#DEECE8"
                        title="Expression 2"
                      />
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={30}
                        radius={35}
                        borderWidth={7}
                        color="#FE65DD"
                        shadowColor="#F9C0ED"
                        bgColor="#F1E9F6"
                        title="Expression 3"
                      />
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                      <CircleBar
                        percent={100}
                        radius={35}
                        borderWidth={7}
                        color="#FF7A30"
                        shadowColor="#FFB688"
                        bgColor="#F2EEF0"
                        title="Expression 4"
                      />
                    </Col>
                  </Row>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => onMoveScreen('AnalyticsDetails')}>
                <View style={styles.buttonViewThree}>
                  <Text style={styles.buttonThree}>Details</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 230,
  },
  pageTitle: {
    color: '#013551',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  interViewCardOne: {
    backgroundColor: '#FFF2E9',
    paddingTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  interViewCardTwo: {
    backgroundColor: '#EDEEFB',
    paddingTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  interViewCardThree: {
    backgroundColor: '#F3FCFA',
    paddingTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardTitleVIew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },
  title: {
    fontSize: 13,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#414760',
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: '#414760',
  },
  cardTitleRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    paddingHorizontal: 5,
    color: '#414760',
  },
  charteView: {
    // paddingLeft: 20,
    // paddingRight: 10,
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  buttonViewOne: {
    backgroundColor: '#FFDAC3',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonOne: {
    fontSize: 14,
    fontFamily: 'Poppins',
    paddingVertical: 10,
    color: '#F17720',
    fontWeight: '600',
  },
  buttonViewTwo: {
    backgroundColor: '#D7DAFF',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonTwo: {
    fontSize: 14,
    fontFamily: 'Poppins',
    paddingVertical: 10,
    color: '#434ADA',
    fontWeight: '600',
  },
  buttonViewThree: {
    backgroundColor: '#B9EBE1',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonThree: {
    fontSize: 14,
    fontFamily: 'Poppins',
    paddingVertical: 10,
    color: '#48B96E',
    fontWeight: '600',
  },
});

AnalyticsScreen.navigationOptions = () => {
  return {
    header: () => (
      <View>
        {/* <HeaderOne screenName="Analytics" /> */}
      </View>
    ),
  };
};

export default AnalyticsScreen;
