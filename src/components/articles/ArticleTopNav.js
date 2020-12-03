import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {withNavigation} from 'react-navigation';

const ArticleTopNav = props => {
  return (
    <View style={styles.root}>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('All')}>
        <View style={styles.navPart}>
          <Image
            style={styles.navIcon}
            source={require('../../../assets/header/icon1.png')}
          />
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Poppins',
            }}>
            All
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('Main')}>
        <View style={styles.navPart}>
          <Image
            style={styles.navIcon}
            source={require('../../../assets/header/icon2.png')}
          />
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Poppins',
              //   color: `${tintColor}`,
            }}>
            Main
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('Web')}>
        <View style={styles.navPart}>
          <Image
            style={styles.navIcon}
            source={require('../../../assets/header/icon3.png')}
          />
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Poppins',
              //   color: `${tintColor}`,
            }}>
            Web
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('Other')}>
        <View style={styles.navPart}>
          <Image
            style={styles.navIcon}
            source={require('../../../assets/header/icon4.png')}
          />
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Poppins',
              //   color: `${tintColor}`,
            }}>
            Other
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF2EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 20,
    paddingTop: '10%',
    marginTop: '-5%',
    zIndex: -1,
  },
  navPart: {
    alignItems: 'center',
  },
  navIcon: {
    width: 40,
    height: 40,
  },
  navText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    paddingVertical: 5,
  },
});

export default withNavigation(ArticleTopNav);
