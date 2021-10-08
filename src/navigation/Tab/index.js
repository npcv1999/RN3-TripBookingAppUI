import React from 'react';
import {View, Text, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, icons} from '../../utils';
import {Home} from '../../screens';

const Tab = createBottomTabNavigator();

const tabOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      with: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
};

const screenOptions = ({route}) => ({
  ...tabOptions,
  tabBarIcon: ({focused}) => {
    const tintColor = focused ? COLORS.primary : COLORS.gray;
    switch (route.name) {
      case 'Home':
        return (
          <Image
            source={icons.home}
            style={{tintColor: tintColor, width: 30, height: 30}}></Image>
        );
      case 'Search':
        return (
          <Image
            source={icons.search}
            style={{
              tintColor: tintColor,
              width: 30,
              height: 30,
            }}></Image>
        );
      case 'BookMark':
        return (
          <Image
            source={icons.bookmark}
            style={{
              tintColor: tintColor,
              width: 30,
              height: 30,
            }}></Image>
        );
      case 'User':
        return (
          <Image
            source={icons.user}
            style={{
              tintColor: tintColor,
              width: 30,
              height: 30,
            }}></Image>
        );
    }
  },
});

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Search" component={Home}></Tab.Screen>
      <Tab.Screen name="BookMark" component={Home}></Tab.Screen>
      <Tab.Screen name="User" component={Home}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
