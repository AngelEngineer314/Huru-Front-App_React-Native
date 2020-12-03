import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';

import AppSubHeader from '../../layout/header/AppSubHeader';
import NotificationBlock from '../../components/settings/NotificationBlock'

const notifications = [
  { 
    title: 'Notification 1' ,
    text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy",
  },
  { 
    title: 'Notification 2' ,
    text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy",
  },
  { 
    title: 'Notification 3' ,
    text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy",
  },
  { 
    title: 'Notification 4' ,
    text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy",
  },
  { 
    title: 'Notification 5' ,
    text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy",
  },
]

const NotificationScreen = (props) => {
  const { onMoveScreenGroup, onMoveTab, onMoveScreen } = props

  return (
    <View style={styles.root}>
      <AppSubHeader title="Notifications" onMoveScreen={onMoveScreen} moveScreen="Settings" showUserImage={true} onMoveScreenGroup={onMoveScreenGroup} onMoveTab={onMoveTab}/>
      {/* <SafeAreaView> */}
        {/* <ImageBackground
          source={require('../../../assets/welcome/welcomebg.png')}
          style={{width: '100%', height: '100%'}}> */}
          
          <ScrollView>
            <View style={styles.mainView}>
              {notifications.map((item, index) => (
                <NotificationBlock title={item.title} text={item.text} key={index}/>
              ))}
              </View>
          </ScrollView>
        {/* </ImageBackground> */}
      {/* </SafeAreaView> */}
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
    marginTop: 20,
    marginBottom: 150,
  },
});

NotificationScreen.navigationOptions = () => {
  return {
    header: () => (
      <View>
        {/* <HeaderTwo screenName="Notifications" /> */}
      </View>
    ),
  };
};

export default NotificationScreen;
