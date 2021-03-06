import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import BgWelcome from '../../components/welcome/BgWelcome';
import QaItem from '../../components/welcome/QaItem';
import WalkThroughHeader from '../../components/welcome/WalkThroughHeader';
import WelcomeButton from '../../components/welcome/WelcomeButton';

const WalkThroughScreen = props => {
  const { onMoveScreen } = props

  return (
    <BgWelcome bottom='-10%'>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.mainView}>
            <View style={styles.logoView}>
              <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
              />
            </View>
            <View style={styles.header}>
              <WalkThroughHeader
                number="1/3"
                title="Question : Why do you want to work here?"
              />
            </View>
            <View style={styles.qaItemView}>
              <QaItem title="Lorem Ipsum is simply dummy text of the print ing and  typesetting industry. " />
              <QaItem
                title="When an unknown printer took a galley of
              type and the scrambled it to make a type
              specimen book. It has survived. "
              />
              <QaItem
                title="Lorem Ipsum is simply dummy text of the
              printing and  typesetting industry. "
              />
              <QaItem
                title="Lorem Ipsum is simply dummy text of the
              printing and  typesetting industry. "
              />
              <WelcomeButton title="NEXT" onMoveScreen={onMoveScreen} moveScreenNum={3} moveType={'screen'} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BgWelcome>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  header: {
    marginBottom: 50,
  },
  logoView: {
    // marginTop: 30,
  },
  logo: {
  },
  qaItemView: {
    marginHorizontal: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
});

WalkThroughScreen.navigationOptions = navData => {
  return {
    header: () => null,
  };
};

export default WalkThroughScreen;
