import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES} from '../utils';

const OptionItems = ({colors, icon, label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.shadow, {width: 60, height: 60}]}>
        <LinearGradient
          style={styles.linearContainer}
          colors={colors}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Image source={icon} style={styles.img}></Image>
        </LinearGradient>
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default OptionItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  img: {
    tintColor: COLORS.white,
    width: 30,
    height: 30,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    marginTop: SIZES.base,
    color: COLORS.gray,
    ...FONTS.body3,
  },
});
