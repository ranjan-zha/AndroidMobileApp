import {StyleSheet, Dimensions,Platform} from 'react-native';
import {colors} from '../../config/styles.js';

const window = Dimensions.get('window');

export default StyleSheet.create({
  amenitiesWrapper : {
    // backgroundColor: "#ff0",
  },
  container:{
    // backgroundColor:colors.layoutColor,
    backgroundColor:'#76a3fd',
    padding:0,
    margin:0,
    paddingTop:10,
    marginTop:15,
    ...Platform.select({
      ios:{
         height: 100 ,
          paddingTop:25,
      },
      android : {
      }
    }),
    // borderBottomColor: colors.black,
    // borderBottomWidth: 1,
    
    // elevation: 2,
    height:70,
    alignItems:"center"
  },
  hedaer:{
    color:colors.white,
    fontSize:20
  },
  bellplus: {
  ...Platform.select({
    ios:{
          position: 'absolute',
          right: 4,
          color: '#fff',
    },
    android : {
      position: 'absolute',
      right: 1,
      top: 3,
      color: '#fff',
    }
  })
},
notificationTextbellicon: {
  ...Platform.select({
    ios:{
          position: 'absolute',
          right: 4,
          color: '#fff',
    },
    android : {
      position: 'absolute',
      right: 6,
      color: '#fff',
    }
  })
},

notificationTextbelliconplus: {
  ...Platform.select({
    ios:{
          position: 'absolute',
          right: 4,
          color: '#fff',
    },
    android : {
      position: 'absolute',
      right: 10,
      color: '#fff',
    }
  })
},
  notificationText: {

    ...Platform.select({
   ios:{
         position: 'absolute',
         right: 0,
         left: 15,
         top: -10,
         borderRadius: 10,
         borderWidth: 1,
         borderColor: '#dc3545',
         width: 20,
         height: 20,
         textAlign: 'center',
         color: '#fff',
         fontSize: 12,
         backgroundColor: '#dc3545',
         fontFamily:"Montserrat-Regular",


   },
   android : {
         position: 'absolute',
         right: 0,
         left: 15,
         top: -10,
         borderRadius: 29,
         width: 20,
         height: 20,
         textAlign: 'center',
         color: '#fff',
         fontSize: 10,
         backgroundColor: '#dc3545',
         fontFamily:"Montserrat-Regular",

   }
 })
},
});

