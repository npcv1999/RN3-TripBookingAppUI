import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../utils';

const styles = StyleSheet.create({
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
  banner: {
    flex: 1,
    marginTop: SIZES.base,
    paddingHorizontal: SIZES.padding,
  },
  option: {
    flex: 1,
    marginTop: SIZES.radius,
  },
  optionItem: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.base,
  },
  destination: {
    flex: 1,
  },
});
export default styles;
