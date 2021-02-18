import { StatusBar } from 'react-native';
import {StyleSheet, Dimensions,Platform} from 'react-native';
import {colors} from '../../config/styles.js';

const window = Dimensions.get('window');

export default StyleSheet.create({
    screenContainer:{
      backgroundColor   : '#fff',
      // height:568,
      width:"100%",
    },
    headView:{
      backgroundColor   : '#76a3fd',
      height:200,
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20,
      width:"100%",
      color:"#fff"
    },
    textContainer:{
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingLeft:"5%",
      paddingRight:"5%",
      marginTop:15,
    },
    textStyle:{
      color:"#fff",
      
      
    },
    textBg:{
      backgroundColor:"#5e83e8",
      width:150,
      height:30,
      padding:5,
      marginLeft:5,
      borderRadius:5,

    },
    userContainer:{
      marginLeft:"8%",
      marginTop:30,
    },
    userName:{
      color:"#fff",
      fontWeight:"500",
      fontSize:18,
      paddingBottom:8,
    },
    input:{
      width:"90%"
    },
    locationHeadText:{
      color:"#333",
      fontWeight:"900",
      fontSize:20,
    },
    // container:{
    //   flex:1,
    //   paddingTop:StatusBar.currentHeight,
    // },
    // scrollView:{
    //   marginHorizontal:20,
    //   backgroundColor:"pink"
    // }
  });


