import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import renderDestinations from '../../components/Home/destinations';
import OptionItems from '../../components/OptionItems';
import {FONTS, icons, images, SIZES} from '../../utils';
import fakeData from '../../utils/fakeDatas';
import styles from './styles';

const Home = ({navigation}) => {
  // Dummy Data
  const [destinations, setDestinations] = React.useState(fakeData.destinations);
  console.log(fakeData);

  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={images.homeBanner}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}></Image>
      </View>

      {/* Options */}
      <View style={styles.option}>
        <View style={styles.optionItem}>
          <OptionItems
            icon={icons.airplane}
            colors={['#46aeff', '#5884ff']}
            label="Flight"
            onPress={() => {
              console.log('Flight');
            }}
          />
          <OptionItems
            icon={icons.train}
            colors={['#fddf90', '#fcda13']}
            label="Train"
            onPress={() => {
              console.log('Train');
            }}
          />
          <OptionItems
            icon={icons.bus}
            colors={['#e973ad', '#da5df2']}
            label="Bus"
            onPress={() => {
              console.log('Bus');
            }}
          />
          <OptionItems
            icon={icons.taxi}
            colors={['#fcaba8', '#fe6bba']}
            label="Taxi"
            onPress={() => {
              console.log('Taxi');
            }}
          />
        </View>

        {/* Option line 2 */}
        <View style={styles.optionItem}>
          <OptionItems
            icon={icons.bed}
            colors={['#ffc465', '#ff9c5f']}
            label="Hotel"
            onPress={() => {
              console.log('Hotel');
            }}
          />
          <OptionItems
            icon={icons.eat}
            colors={['#7cf1fb', '#4ebefd']}
            label="Eats"
            onPress={() => {
              console.log('Eats');
            }}
          />
          <OptionItems
            icon={icons.compass}
            colors={['#7be993', '#46caaf']}
            label="Adventure"
            onPress={() => {
              console.log('Adventure');
            }}
          />
          <OptionItems
            icon={icons.event}
            colors={['#fca397', '#fc7b6c']}
            label="Event"
            onPress={() => {
              console.log('Event');
            }}
          />
        </View>
      </View>

      {/* Destination */}
      <View style={styles.destination}>
        <Text
          style={{
            ...FONTS.h2,
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
          }}>
          Destination
        </Text>

        {/* FlatList item */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) =>
            renderDestinations(item, index, navigation)
          }
        />
      </View>
    </View>
  );
};

export default Home;
