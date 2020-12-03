import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WalkthroughScreen from '../screen/questions/WalkthroughScreen';
import WalkthroughTwoScreen from '../screen/questions/WalkThroughTwoScreen';
import WalkthroughThreeScreen from '../screen/questions/WalkthroughThreeScreen';
import WelcomeScreen from '../screen/questions/WelcomeScreen';
import SignUpScreen from '../screen/auth/SignUpScreen';
import LoginScreen from '../screen/auth/LoginScreen';
import DashboardScreen from '../screen/dashboard/DashboardScreen';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import ArticleScreen from '../screen/article/ArticleScreen';
import AnalyticsScreen from '../screen/analytics/AnalyticsScreen';
import SettingScreen from '../screen/profile/SettingScreen';
import CategoryScreen from '../screen/category/CategoryScreen';
import CategoryScreenModal from '../components/category/CategoryScreenModal';
import ProfileScreen from '../screen/profile/ProfileScreen';
import NotificationScreen from '../screen/profile/NotificationScreen';
import PlanScreen from '../screen/profile/PlanScreen';
import AllScreen from '../screen/article/AllScreen';
import MainScreen from '../screen/article/MainScreen';
import WebScreen from '../screen/article/WebScreen';
import OtherScreen from '../screen/article/OtherScreen';
import HeaderArticle from '../components/HeaderArticle';
import AnalyticsDetailsScreen from '../screen/analytics/AnalyticsDetailsScreen';
import SubCategoryScreen from '../screen/category/SubCategoryScreen';
import InterviewListScreen from '../screen/category/InterviewListScreen';
import InterviewScreen from '../screen/category/InterviewScreen';
import CameraScreen from '../screen/category/CameraScreen';
import InterviewResultScreen from '../screen/category/InterviewDoneScreen';
import {Platform} from 'react-native';

import NavigationBg from '../../assets/tab_bg.png'

const CategoryDefaultScreen = () => {
    return null
}

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Walkthrough: WalkthroughScreen,
  WalkthroughTwo: WalkthroughTwoScreen,
  WalkthroughThree: WalkthroughThreeScreen,
});

const AppStack = createStackNavigator({
  Dashboard: DashboardScreen,
});

const ArtNav = createMaterialTopTabNavigator(
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
    tabBarComponent: HeaderArticle,
    tabBarOptions: {
      activeTintColor: '#1BA1F3',
      inactiveTintColor: '#000',
    },
    initialRouteName: 'Main',
  },
);

const Article = createStackNavigator({
  Article: ArtNav,
});

const Camera = createStackNavigator({
  Camera: CameraScreen,
  InterviewResult: InterviewResultScreen,
});

const InterViewStack = createStackNavigator({
  Interview: {
    screen: InterviewScreen,
  },
});

const Category = createStackNavigator({
  CategoryScreen: CategoryScreen,
  SubCategory: SubCategoryScreen,
  InterviewList: InterviewListScreen,
});
const Analytics = createStackNavigator({
  Analytics: AnalyticsScreen,
  AnalyticsDetails: AnalyticsDetailsScreen,
});
const Setting = createStackNavigator({
  Setting: SettingScreen,
  Profile: ProfileScreen,
  Notification: NotificationScreen,
  Plan: PlanScreen,
});

const TabBarNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: AppStack,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <MaterialIcon color={tintColor} name="dashboard" size={26} />
        ),
      }),
    },

    Article: {
      screen: ArtNav,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Foundation color={tintColor} name="lightbulb" size={30} />
        ),
      }),
    },

    Category: {
      screen: Category,
      navigationOptions: () => ({
        tabBarIcon: props => ( props.focused ? null : <CategoryScreenModal {...props} /> ),
      }),
    },
    Analytics: {
      screen: Analytics,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Entypo color={tintColor} name="pie-chart" size={26} />
        ),
      }),
    },
    Setting: {
      screen: Setting,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <IonIcon color={tintColor} name="settings" size={26} />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#FB7C00', // active icon color
      inactiveTintColor: '#FDBB7A', // inactive icon color
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      style: {
        backgroundImage: 'url(' + {NavigationBg} + ')',
        width: '100%',
        backgroundRepeat: 'none',
        borderWidth: 0,
        borderColor: '#000',
        border: 'none',
        paddingTop: 10,
        borderTopWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 80,
      },
    },
  },
);

const AppNavigation = createSwitchNavigator({
  TabNav: TabBarNavigator,
  Auth: AuthStack,
  Camera,
  InterViewStack,
});

export default createAppContainer(AppNavigation);
