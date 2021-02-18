import {StyleSheet, Dimensions,Platform} from 'react-native';
import {colors} from '../../config/styles.js';

const window = Dimensions.get('window');

export default StyleSheet.create({
  header:{
    fontSize:18,
    alignSelf:"center",
    paddingVertical:15,
  },
  label : {
    fontSize:15,
    flex:0.3,
  },
  text:{
    fontSize:14,
    flex:0.7,
  },
  viewBox:{
    flexDirection:'row',
    paddingHorizontal:15
  }
});

