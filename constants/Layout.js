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
};
