import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  headerContainer: {flex: 2},
  floatRate: {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    right: '5%',
    borderRadius: 15,
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
  },

  bodyContainer: {flex: 1.5},
  footerContainer: {flex: 0.5, paddingHorizontal: SIZES.padding},
});
