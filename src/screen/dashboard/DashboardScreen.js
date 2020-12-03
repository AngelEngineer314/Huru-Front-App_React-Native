import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  processColor,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import HeaderOne from '../../components/HeaderOne';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

import { interview, category, LineChartData } from './data';
import WrapperRadarChart from '../../components/dashboard/WrapperRadarChart'
import TooltipLineChart from '../../components/dashboard/TooltipLineChart'


const DashboardScreen = ( props ) => {
  // console.log(JSON.parse(interview));

  const renderInterView = itemData => (
    <View style={styles.itemView}>
      <View style={styles.itemImageView}>
        <Image style={styles.itemImage} source={{uri: itemData?.item.image}} />
      </View>
      <View>
        <LinearGradient
          style={{
            paddingHorizontal: 10,
            maxWidth: 140,
            paddingTop: 50,
            borderTopRightRadius: 80,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            top: -25,
            zIndex: -999,
          }}
          colors={[itemData.item.colorOne, itemData.item.colorTwo]}>
          <Text style={styles.itemTitle}>{itemData?.item.title}</Text>
          <Text style={styles.itemDetails}>{itemData?.item.details}</Text>
          <Text style={styles.itemTime}>{itemData?.item.time}</Text>
        </LinearGradient>
      </View>
    </View>
  );

  const renderCategory = itemData => (
    <View style={styles.itemView}>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            paddingHorizontal: 20,
            maxWidth: 140,
            paddingTop: 5,
            paddingBottom: 10,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            zIndex: -999,
            marginBottom: 10,
          }}
          colors={[itemData.item.colorOne, itemData.item.colorTwo]}>
          <Text style={styles.itemTitle}>{itemData?.item.title}</Text>
          <TouchableOpacity>
            <Text style={styles.catButtonText}>View Category</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );

  xAxis: {
    valueFormatter: ['A', 'B', 'C', 'D', 'E'];
  }

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.titleView}>
            <View style={styles.titleLeft}>
              <Text style={styles.title}>General Insights</Text>
            </View>
            <View style={styles.titleRight}>
              <Text style={styles.details}>Details</Text>
              <AntDesign name="arrowright" size={18} style={styles.detailIcon} />
            </View>
          </View>
          <View style={styles.sliderView}>
            <View style={styles.slider}>
              <Swiper style={styles.wrapper}>
                <View style={styles.slide}>
                  <View style={styles.chartTitleView}>
                    <FontAwesome name="circle" size={12} color={"#F27A25"} style={styles.chartTitleIcon} />
                    <Text style={styles.chartTitle}>Expression1</Text>
                  </View>
                  <View style={styles.wrapperRadarChart}>
                    <WrapperRadarChart />
                  </View>
                </View>
                {LineChartData.map((item, index) => (
                  <View style={styles.slide} key={index}>
                    <View style={styles.chartTitleView}>
                      <FontAwesome name="circle" size={12} color={"#F27A25"} style={styles.chartTitleIcon} />
                      <Text style={styles.chartTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.wrapperRadarChart}>
                      <TooltipLineChart chartData={item} />
                    </View>
                  </View>
                ))}
                <View style={styles.slide}>
                    <View style={styles.chartTitleView}>
                      <FontAwesome name="circle" size={12} color={"#4449D5"} style={styles.chartTitleIcon} />
                      <Text style={styles.chartTitle}>Expression3</Text>
                    </View>
                    <View style={styles.wrapperRadarChart}>
                      <TooltipLineChart 
                        chartData={{
                          title: 'Expression3',
                          circleColor: '#4449D5',
                          lineColor: '#4449D5',
                          areaColor: '#758EEC',
                          markerColor: '#4449D5',
                        }} />
                    </View>
                  </View>
                  <View style={styles.slide}>
                    <View style={styles.chartTitleView}>
                      <FontAwesome name="circle" size={12} color="#24CCD9" style={styles.chartTitleIcon} />
                      <Text style={styles.chartTitle}>Expression4</Text>
                    </View>
                    <View style={styles.wrapperRadarChart}>
                    <TooltipLineChart 
                        chartData={{
                          title: 'Expression4',
                          circleColor: '#24CCD9',
                          lineColor: '#24CCD9',
                          areaColor: '#1AD4DD',
                          markerColor: '#24CCD9',
                        }} />
                    </View>
                  </View>
                  <View style={styles.slide}>
                    <View style={styles.chartTitleView}>
                      <FontAwesome name="circle" size={12} color="#DC51D7" style={styles.chartTitleIcon} />
                      <Text style={styles.chartTitle}>Expression5</Text>
                    </View>
                    <View style={styles.wrapperRadarChart}>
                    <TooltipLineChart 
                        chartData={{
                          title: 'Expression5',
                          circleColor: '#DC51D7',
                          lineColor: '#DC51D7',
                          areaColor: '#ED9DE5',
                          markerColor: '#DC51D7',
                        }} />
                    </View>
                  </View>
              </Swiper>
            </View>
          </View>
          <View style={styles.titleView}>
            <View style={styles.titleLeft}>
              <Text style={styles.title}> Interviews</Text>
            </View>
            <View style={styles.titleRight}>
              <Text style={styles.details}>More</Text>
              <AntDesign name="arrowright" size={18} style={styles.detailIcon}/>
            </View>
          </View>
          <View style={styles.interviewContent}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={interview}
              renderItem={renderInterView}
              key={interview.id}
            />
          </View>

          <View style={styles.titleView}>
            <View style={styles.titleLeft}>
              <Text style={styles.title}> Interviews by Category</Text>
            </View>
            <View style={styles.titleRight}>
              <Text style={styles.details}>More</Text>
              <AntDesign name="arrowright" size={18} style={styles.detailIcon}/>
            </View>
          </View>
          <View style={styles.categoryContent}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={category}
              renderItem={renderCategory}
              key={category.id}
            />
          </View>
          <View style={{padding: 50}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff'
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  titleLeft: {},
  titleRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#013551',
    fontSize: 17,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    fontFamily: 'Poppins',
    paddingHorizontal: 10,
    color: '#666775',
    fontWeight: 'bold'
  },
  detailIcon: {
    color: '#666775',
  },
  sliderView: {
    marginHorizontal: 10,
  },
  wrapper: {
    maxHeight: 250,
  },
  slide: {
    // backgroundColor: '#fff'
  },
  wrapperRadarChart: {
    // flex: 1,
    // width: 500,
    height: '95%',
  },
  chartTitleView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  charTitle: {
    color: '#140F26',
    fontSize: 12,
  },
  chartTitleIcon: {
    paddingTop: 3,
    paddingRight: 7,
  },
  chartTitle: {
    color: '#140F26',
    fontSize: 12,
    fontFamily: 'Poppins',
  },
  interviewContent: {
    marginLeft: 20,
    marginTop: -20,
  },
  itemView: {
    marginRight: 20,
  },
  itemImageView: {
    backgroundColor: 'rgba(255,255, 255, 0.2)',
    width: 70,
    height: 70,
    alignItems: 'center',
    borderRadius: 999,
    zIndex: 999,
    bottom: -25,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  content: {
    alignItems: 'flex-start',
  },
  itemTitle: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: 16,
    paddingVertical: 5,
  },
  itemDetails: {
    color: '#fff',
    fontWeight: '400',
    fontFamily: 'Poppins',
    fontSize: 14,
    paddingVertical: 5,
  },
  itemTime: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: 18,
    paddingVertical: 5,
  },
  catButtonText: {
    color: '#fff',
    backgroundColor: 'rgba(255,255, 255, 0.2)',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 10,
  },
  categoryContent: {
    marginLeft: 20,
    paddingBottom: 150,
  },
});

DashboardScreen.navigationOptions = () => {
  return {
    header: () => (
      <View></View>
    ),
  };
};

export default DashboardScreen;
