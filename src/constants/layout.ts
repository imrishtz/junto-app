import {TextStyle, ViewStyle} from 'react-native';
import {wp} from '../utils/responsiveUtil';

export const ICON_TOUCHABLE_AREA = 50;

export const PADDING_HORIZONTAL_DEFAULT = wp('5.3%');

export const CENTERED: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
};
export const H1: TextStyle = {
    fontSize: 24,
    fontWeight: '700',
    paddingVertical: 8,
    textAlign: 'center',
};
export const H2: TextStyle = {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 6,
    textAlign: 'center',
};
export const H3: TextStyle = {
    fontSize: 18,
    fontWeight: '300',
    paddingVertical: 5,
};
