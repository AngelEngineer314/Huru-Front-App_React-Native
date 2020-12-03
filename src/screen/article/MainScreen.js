import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import Swiper from 'react-native-swiper';

import {dataMain} from './data';
import ArticleCard from '../../components/articles/ArticleCard'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const MainScreen = () => {
  return (
    <View style={styles.root}>
      <ScrollView>
          <View style={styles.scrollView}>
              <View style={styles.sliderView}>
                  {/* <Swiper
                      autoplay={true}
                      activeDotColor="#FB7C00"
                      style={styles.wrapper}>
                      {dataMain.map((item, index) => (
                          <View style={styles.slide} key={index}>
                              <ArticleCard itemData={item}/>
                          </View>
                      ))}
                  </Swiper> */}
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={dataMain}
                    renderItem={ArticleCard}
                    key={dataMain.id}
                  />
              </View>
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  scrollView: {
    marginBottom: 200,
  },
  wrapper: {
    maxHeight: windowHeight * 0.6,
  },
  sliderView: {
    marginTop: 10,
    marginLeft: 30,
  },
});

MainScreen.navigationOptions = () => {
  return {
    header: () => (
      <View>
        {/* <HeaderTwo screenName="Interview" /> */}
      </View>
    ),
  };
};

export default MainScreen;
