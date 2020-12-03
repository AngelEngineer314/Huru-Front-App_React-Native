import React from 'react';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import ArticleTopNav from '../components/articles/ArticleTopNav';
import AllScreen from '../screen/article/AllScreen'
import MainScreen from '../screen/article/MainScreen'
import WebScreen from '../screen/article/WebScreen'
import OtherScreen from '../screen/article/OtherScreen'

const ArticleTopNavigator = createMaterialTopTabNavigator(
    {
      All: {
        screen: AllScreen,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <MaterialIcon color={tintColor} name="dashboard" size={26} />
          ),
        }),
      },
      Main: {
        screen: MainScreen,
      },
      Web: {
        screen: WebScreen,
      },
      Other: {
        screen: OtherScreen,
      },
    },
    {
      tabBarComponent: ArticleTopNav,
      tabBarOptions: {
        activeTintColor: '#F17720',
        inactiveTintColor: '#013551',
      },
      initialRouteName: 'All',
    },
);

const ArticleNavigator = createSwitchNavigator({
    TopNav: ArticleTopNavigator,
});

export default createAppContainer(ArticleNavigator);