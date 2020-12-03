import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import BgWelcome from '../../components/welcome/BgWelcome';
import QaItem from '../../components/welcome/QaItem';
import WalkThroughHeader from '../../components/welcome/WalkThroughHeader';
import WelcomeButton from '../../components/welcome/WelcomeButton';

const WalkThroughThreeScreen = (props) => {
  const { onMoveScreenGroup } = props

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
                number="3/3"
                title="Question : Why do you want to work here?"
              />
            </View>
            <View style={styles.qaItemView}>
              <QaItem title="Lorem Ipsum is simply dummy text of the printing and  typesetting industry. " />
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
              <WelcomeButton title="START" onMoveScreenGroup={onMoveScreenGroup} moveScreenGroup='auth' moveType='group' />
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
    paddingHorizontal: 30,
    overflow: 'hidden',
  },
  header: {
    marginBottom: 50,
  },
  logo: {
    // width: 300,
  },
  qaItemView: {
    marginHorizontal: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
});

WalkThroughThreeScreen.navigationOptions = navData => {
  return {
    header: () => null,
  };
};

export default WalkThroughThreeScreen;
