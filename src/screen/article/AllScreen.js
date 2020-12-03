import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, FlatList} from 'react-native';
import HeaderTwo from '../../components/HeaderTwo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

import { dataAll } from './data';
import ArticleCard from '../../components/articles/ArticleCard'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const AllScreen = props => {

    return (
        <View style={styles.root}>
            <ScrollView>
                <View style={styles.scrollView}>
                    <View style={styles.sliderView}>
                        {/* <Swiper
                            autoplay={true}
                            activeDotColor="#FB7C00"
                            style={styles.wrapper}>
                            {dataAll.map((item, index) => (
                                <View style={styles.slide} key={index}>
                                    <ArticleCard itemData={item}/>
                                </View>
                            ))}
                        </Swiper> */}
                        <FlatList
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          data={dataAll}
                          renderItem={ArticleCard}
                          key={dataAll.id}
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
    marginBottom: '25%',
  },
  wrapper: {
    maxHeight: windowHeight * 0.6,
  },
  sliderView: {
    marginTop: 10,
    // marginHorizontal: -100,
    marginLeft: 30,
  },
});

AllScreen.navigationOptions = () => {
  return {
    header: () => (
      <View>
        {/* <HeaderTwo screenName="Interview" /> */}
      </View>
    ),
  };
};

export default AllScreen;
