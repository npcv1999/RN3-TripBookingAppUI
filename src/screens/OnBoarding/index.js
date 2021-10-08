import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, images, SIZES} from '../../utils';
import styles from './styles';

const OnBoarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewCenter}>
        <Image
          source={images.onboardingImage}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}></Image>
      </View>
      <View style={styles.viewCenter}>
        <View style={{alignItems: 'center', marginHorizontal: SIZES.padding}}>
          <Text style={{...FONTS.h2, color: '#000'}}>Digital ticket</Text>
          <Text
            style={{
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: 'center',
            }}>
            Easy solution to buy ticket for your travel, business trips,
            transportation, lodging and culinary
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.shadow,
            {
              marginTop: SIZES.padding * 2,
              width: '70%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            },
          ]}
          onPress={() => navigation.navigate('Home')}>
          <LinearGradient
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}
            colors={['#46aeff', '#5884ff']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>Start !</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
