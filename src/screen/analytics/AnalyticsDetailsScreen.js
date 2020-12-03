import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Row, Col } from 'react-native-responsive-grid-system';
import HeaderTwo from '../../components/HeaderTwo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

import AppSubHeader from '../../layout/header/AppSubHeader'
import CircleBar from '../../components/CircleBar';

const AnalyticsDetailsScreen = props => {
  const { onMoveScreen, onMoveScreenGroup, onMoveTab } = props

  return (
    <View style={styles.root}>
      <AppSubHeader title="Interview 1" onMoveScreen={onMoveScreen} moveScreen={'Analytic'} showUserImage={true} onMoveTab={onMoveTab} onMoveScreenGroup={onMoveScreenGroup}/>
      <ScrollView>
        <View style={styles.scrollView}>
          <View style={styles.cardTitleVIew}>
            <View style={styles.cardTitleLeft}>
              <Text style={styles.title}>Sub Category</Text>
              <Text style={styles.subTitle}>Interview</Text>
            </View>
            <View style={styles.cardTitleRight}>
              <MaterialIcon color="#2B2C46" size={14} name="access-time" />
              <Text style={styles.time}>02.35 am</Text>
            </View>
          </View>
          <View style={styles.sliderView}>
            <View style={styles.slider}>
              <Swiper
                autoplay={true}
                activeDotColor="#FB7C00"
                style={styles.wrapper}>
                <View style={styles.slide}>
                  <Image
                    style={styles.sliderImage}
                    source={require('../../../assets/analytics/video.png')}
                  />
                </View>
                <View style={styles.slide}>
                  <Image
                    style={styles.sliderImage}
                    source={require('../../../assets/analytics/video.png')}
                  />
                </View>
                <View style={styles.slide}>
                  <Image
                    style={styles.sliderImage}
                    source={require('../../../assets/analytics/video.png')}
                  />
                </View>
              </Swiper>
            </View>
          </View>
          <View style={styles.charteView}>
            <Text style={styles.resultTitle}>Results</Text>
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
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
  },
  scrollView: {
    marginBottom: 200,
  },
  cardTitleVIew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#2B2C46',
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#2B2C46',
    fontWeight: '700',
  },
  cardTitleRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: 14,
    paddingHorizontal: 5,
    color: '#2B2C46',
    fontWeight: '400',
  },
  wrapper: {
    maxHeight: 250,
  },
  charteView: {
    // paddingLeft: 20,
    // paddingRight: 10,
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  resultTitle: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: '#2B2C46',
    fontWeight: '700',
    paddingLeft: 20,
  },
  sliderView: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  sliderImage: {
    width: '100%',
    height: 200,
  },
});

AnalyticsDetailsScreen.navigationOptions = () => {
  return {
    header: () => (
      <View>
        <HeaderTwo screenName="Interview" />
      </View>
    ),
  };
};

export default AnalyticsDetailsScreen;
