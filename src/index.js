import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Detail, Home, OnBoarding} from './screens';
import {COLORS, icons, SIZES} from './utils';
import {Image, TouchableOpacity} from 'react-native';
import Tabs from './navigation/Tab';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const optionScreen = ({navigation, route}) => ({
  //Config left header back go back and if detail screen header transparent
  title: null,
  headerTransparent: route.name == 'Detail' ? true : false, //config with "route" destructuring object
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerLeft: () => (
    //config destructuring object "navigation"
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={icons.back} style={{width: 25, height: 25}}></Image>
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity
      style={{marginLeft: SIZES.padding}}
      onPress={() => console.log('Press bar menu')}>
      <Image source={icons.menu} style={{width: 25, height: 25}}></Image>
    </TouchableOpacity>
  ),
});

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false, //hide shadow below header
          title: null,
        }}>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={() => console.log('Press bar menu')}>
                <Image
                  source={icons.barMenu}
                  style={{width: 25, height: 25}}></Image>
              </TouchableOpacity>
            ),
          }}></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={optionScreen}></Stack.Screen>
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={optionScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
