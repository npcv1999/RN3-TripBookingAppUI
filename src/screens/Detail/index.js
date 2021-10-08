import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconLabel from '../../components/Detail/IconLabel';
import {COLORS, FONTS, icons, images, SIZES, StarReview} from '../../utils';
import {styles} from './styles';

const Detail = () => {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.headerContainer}>
        <Image
          source={images.skiVillaBanner}
          style={{width: '100%', height: '80%'}}></Image>
        <View style={[styles.floatRate, styles.shadow]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.shadow}>
              <Image
                source={images.skiVilla}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 15,
                  marginRight: SIZES.padding,
                }}></Image>
            </View>
            <View>
              <Text>Ski Villa</Text>
              <Text>France</Text>

              {/* Star component */}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <StarReview rate="4.5"></StarReview>
              </View>
            </View>
          </View>
          {/* Comments */}
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.gray,
              marginTop: SIZES.radius,
            }}>
            Ski Villa offers simple rooms with mountain views in front of the
            ski lift to the Ski Resort
          </Text>
        </View>
      </View>

      {/* Body */}
      <View style={styles.bodyContainer}>
        {/* Icons */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            paddingHorizontal: SIZES.padding * 2,
            justifyContent: 'space-between',
          }}>
          <IconLabel icon={icons.villa} label="Villa" />

          <IconLabel icon={icons.parking} label="Parking" />

          <IconLabel icon={icons.wind} label="4 °C" />
        </View>

        {/* About */}
        <View
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}>
          <Text style={{...FONTS.h2}}>About</Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            Located at the Alps with an altitude of 1,702 meters. The ski area
            is the largest ski area in the world and is known as the best place
            to ski. Many other facilities, such as fitness center, sauna, steam
            room to star-rated restaurants.
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <LinearGradient
          style={[{height: 70, width: '100%', borderRadius: 15}]}
          colors={['#edf0fc', '#d6dfff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                flex: 1,
                marginHorizontal: SIZES.padding,
                justifyContent: 'center',
              }}>
              <Text style={{...FONTS.h2}}>$1000</Text>
            </View>

            <TouchableOpacity
              style={{
                width: 130,
                height: '70%',
                marginHorizontal: SIZES.radius,
              }}
              onPress={() => {
                console.log('Booking on pressed');
              }}>
              <LinearGradient
                style={[
                  {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  },
                ]}
                colors={['#46aeff', '#5884ff']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={{color: COLORS.white, ...FONTS.h3}}>BOOKING</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};
export default Detail;
