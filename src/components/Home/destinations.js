import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS, SIZES} from '../../utils';

const renderDestinations = (item, index, navigation) => {
  var destinationStyle = {};

  if (index == 0) {
    destinationStyle = {marginLeft: SIZES.padding};
  }
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        marginHorizontal: SIZES.base,
        ...destinationStyle,
      }}
      onPress={() => {
        navigation.navigate('Detail');
      }}>
      <Image
        source={item.img}
        resizeMode="cover"
        style={{
          width: SIZES.width * 0.28,
          height: '82%',
          borderRadius: 15,
        }}
      />

      <Text style={{marginTop: SIZES.base / 2, ...FONTS.h4}}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default renderDestinations;
