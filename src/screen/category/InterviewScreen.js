import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SwipeButton from 'rn-swipe-button';

import CloseLine from '../../components/category/CloseLine'
import {interview, Interview} from './data';


const InterviewScreen = props => {
  const { onMoveTab, onMoveScreen, previousItem, selectedItem, onVisibleModal } = props
  // const screenName = props.navigation.getParam('name');
  const screenName = selectedItem !== '' ? selectedItem : previousItem;

  const defaultStatusMessage = 'swipe status appears here';
  const [swipeStatusMessage, setSwipeStatusMessage] = useState(
    defaultStatusMessage,
  );

  const TwitterIcon = () => <Icon name="twitter" color="#3b5998" size={30} />;
  const PauseIcon = () => (
    <IonIcon name="pause-outline" color="#F5B771" size={30} />
  );

  setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);
  const updateSwipeStatusMessage = message => setSwipeStatusMessage(message);
  const renderSubHeading = heading => (
    <Text style={styles.subHeading}>{heading}</Text>
  );
  let forceResetLastButton = null;

  return (
    <View style={styles.main}>
      <SafeAreaView>
        <ScrollView>
          <TouchableHighlight>
            <View style={styles.mainView}>
              <View style={styles.headerCard}>
                {/* <CloseLine onVisibleModal={onVisibleModal}/> */}
                <View style={styles.headerContent}>
                  <TouchableOpacity onPress={() => onMoveScreen('interviewList', previousItem, '')}>
                    <View style={styles.titleNav}>
                      <FontAwesome5 name="chevron-left" color="#013551" size={20} />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.titleView}>
                    <TouchableOpacity onPress={() => {}}>
                      <Text style={styles.title}>{previousItem}</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                      <FontAwesome5 name="chevron-left" color="#FFF5EC" size={20}/>
                  </View>
                </View>
                <View style={styles.headerImageView}>
                  <Image
                    style={styles.headerImage}
                    source={
                      require('../../../assets/category/interview1.png')}
                    // require('../../../assets/category/interview2.png')}
                  />
                </View>
              </View>
              <View style={styles.contentCard}>
                <View style={styles.interviewImageView}>
                  <Image
                    style={styles.interviewImage}
                    source={require('../../../assets/category/logo.png')}
                  />
                </View>
                <Text style={styles.screenName}> {screenName}</Text>
                <Text style={styles.interviewText}>
                  This group is meant for designers - a place to learn and share -
                  to ask questions, network, and improve your work & skills.
                </Text>
                <View style={styles.interviewDetails}>
                  <View style={styles.interviewStat}>
                    <View style={styles.statImageViewStart}>
                      <Image
                        style={styles.statImage}
                        source={require('../../../assets/category/icon1.png')}
                      />
                    </View>
                    <Text style={styles.statNumber}> 5 </Text>
                    <Text style={styles.statText}> Questions </Text>
                  </View>
                  <View style={styles.interviewStat}>
                    <View style={styles.statImageViewMiddle}>
                      <Image
                        style={styles.statImage}
                        source={require('../../../assets/category/icon2.png')}
                      />
                    </View>
                    <Text style={styles.statNumber}> 5 </Text>
                    <Text style={styles.statText}> Questions </Text>
                  </View>
                  <View style={styles.interviewStat}>
                    <View style={styles.statImageViewEnd}>
                      <Image
                        style={styles.statImage}
                        source={require('../../../assets/category/icon3.png')}
                      />
                    </View>
                    <Text style={styles.statNumber}> 5 </Text>
                    <Text style={styles.statText}> Questions </Text>
                  </View>
                </View>
              </View>
              <View style={styles.swipeButtonView}>
                <SwipeButton
                  disabled={false}
                  thumbIconComponent={PauseIcon}
                  //disable the button by doing true (Optional)
                  swipeSuccessThreshold={70}
                  height={45}
                  //height of the button (Optional)
                  width={330}
                  //width of the button (Optional)
                  title="Swipe to Start"
                  titleColor="#fff"
                  titleFontWeight="bold"
                  //Text inside the button (Optional)
                  //thumbIconImageSource={thumbIcon}
                  //You can also set your own icon (Optional)
                  //After the completion of swipe (Optional)
                  railFillBackgroundColor="#FFB06A" //(Optional)
                  railFillBorderColor="#FFB06A" //(Optional)
                  thumbIconBackgroundColor="#fff" //(Optional)
                  thumbIconBorderColor="#fff" //(Optional)
                  railBackgroundColor="#FFB06A" //(Optional)
                  railBorderColor="#FFB06A" //(Optional)
                  containerStyles={{
                    paddingVertical: 5,
                    paddingHorizontal: 4,
                    fontWeight: 'bold',
                    // marginHorizontal: 10,
                  }}
                  forceReset={reset => {
                    forceResetLastButton = reset;
                  }}
                  onSwipeStart={() => updateSwipeStatusMessage('Swipe started!')}
                  onSwipeFail={() =>
                    updateSwipeStatusMessage('Incomplete swipe!')
                  }
                  onSwipeSuccess={() => onMoveTab('interview')}
                />
              </View>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0, 0, 0.4)',
  },
  headerCard: {
    backgroundColor: '#FFF5EC',
    // backgroundColor: 'rgba(124, 152, 227, 0.1)',
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 50,
    paddingHorizontal: 10
  },
  headerImageView: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  headerImage: {
    // width: 301,
    // height: 250.57,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 10,
    // marginTop: -40,
  },
  titleNav: {
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    color: '#F17720',
  },
  mainView: {
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: 100,
  },
  contentCard: {
    top: -50,
    alignItems: 'center',
    marginHorizontal: 30,
  },
  interviewImageView: {
    // width: 44,
    // height: 58,
    marginTop: -10,
    paddingLeft: 32,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 999,
  },
  interviewImage: {
    // width: 40,
    // height: 70,
  },
  screenName: {
    color: '#013551',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 32,
  },
  interviewText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    color: '#311B47',
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 30,
    marginBottom: 20,
    lineHeight: 24,
  },
  interviewDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interviewStat: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statImageViewStart: {
    backgroundColor: '#FFE9F5',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 18,
    marginBottom: 15,
  },
  statImageViewMiddle: {
    backgroundColor: '#F3FBFB',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 18,
    marginBottom: 15,
  },
  statImageViewEnd: {
    backgroundColor: '#FFF6ED',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 18,
    marginBottom: 15,
  },
  statImage: {
    width: 30,
    height: 30,
  },
  statNumber: {
    color: '#311B47',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Poppins',
  },
  statText: {
    color: '#311B47',
    fontSize: 12,
    fontFamily: 'Poppins',
  },  
  swipeButtonView: {
    alignItems: 'center',
    marginTop: -20,
  },
});
InterviewScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

export default InterviewScreen;
