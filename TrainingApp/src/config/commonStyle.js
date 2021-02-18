import { StyleSheet, Dimensions,Platform }  from 'react-native';
import { colors }                           from './styles.js';
import { isIphoneX }                        from 'react-native-iphone-x-helper';
import { getStatusBarHeight }               from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const window = Dimensions.get('window');

export default StyleSheet.create({
  container:{
    flex:1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.layoutColor,
    height: 400,
    borderBottomLeftRadius : 20,
    borderBottomRightRadius : 20,
  },
  modalView:{
      paddingVertical:20,
      backgroundColor:'#fff',
      marginTop:15, 
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      borderRadius:10,
      margin:15
  },
  buttonText:{
    color: colors.buttonText,
    borderRadius:50,
    fontFamily:"Montserrat-Regular",
    fontSize: wp('3.5%')
  },
  buttonText1:{
    color: colors.buttonText1,
    borderRadius:50,
    fontFamily:"Montserrat-Regular",
  },
  buttonContainer:{
    marginTop:15,
    ...Platform.select({
      ios:{
        justifyContent:'center',
      },
      android : {
        justifyContent:'center'
      }
    })
  },

  button1:{
    width:'100%',
    backgroundColor: colors.button,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius:50,
    marginBottom:15
  },
  button2:{
    width:'100%',
    backgroundColor: colors.buttonSignUp,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius:50,
    borderWidth:1,
    borderColor:'#333',
    marginBottom:15
  },
  eyeWrapper:{
    width:'30%',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    left:'80%',
    top:22
  },
  headerText:{
    fontSize: wp('4.5%'),
    fontFamily: 'Montserrat-Bold',
    textAlign:'center'
  },
  subHeaderText:{
    fontSize:wp('4%'),
    fontFamily:'Montserrat-Bold',
    color:"#333",
    alignSelf:"center",
    paddingVertical:5
  },
  label:{
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  normalText:{
    fontSize: wp('3.5%'),    
    fontFamily: 'Montserrat-Regular',
  },
 
  inputBorder:{
    borderWidth:1,
    borderColor:"#f1f1f1"
  },
  errorWrapper:{
    width:'100%',
    marginBottom:-10
  },
  formWrapper: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        shadowRadius: 5,
        shadowOffset: { height: 2, width: 0 },
    },
  formInputView: {
    width:'100%',
    paddingHorizontal:15,
    marginBottom:20,
  },
   linkText:{
    color: colors.layoutColor,
    fontSize: 14,
    fontFamily:"Montserrat-SemiBold",
  },
  linkLightText:{
    color: colors.textLight,
    fontSize: 15,
    fontFamily:"Montserrat-Regular",
  },
  successText:{
    color: colors.success,
    fontSize: 12,
    fontFamily:"Montserrat-Regular",
  },
  errorText:{
    color: colors.errorText,
    fontSize: 12,
    fontFamily:"Montserrat-Regular",
  },
  itemTitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: wp('3.5%'),
    color: '#333',
  },
  tabviews: {
        width:wp('100%'),
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
  block1: {
    flex: 0.45,
    height:100,
    justifyContent:"center",
  },
  block2: {
    flex: 0.45,
    height:100,
    justifyContent:"center",
  }, 
});
