import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  tetrisField: {
    height: 20,
    width: 10,
    edgeLength: 30,
  },
  minoAngle: ['angle0','angle90','angle180','angle270'],
  minoName: ['I', 'O','S','Z','J','L','T'],
};
