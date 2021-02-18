import React,{Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Image } from 'react-native-elements';
import Header from '../../layouts/HeaderBar/HeaderBar.js';
import { Icon }    from 'react-native-elements';
import styles                    from './styles.js';
import { SafeAreaView } from 'react-native';

const window = Dimensions.get('window');

export default class RestaurantHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName : "",
      middleName : "",
      lastName : "",
      password : "",
    };
  }

  redirectToHotelView(){
    // var payload ={
    // }
    this.props.navigation.navigate('RestaurantView');
  }

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
   return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation}/>
        {/* <ScrollView style={styles.scrollView}> */}
          <View style={styles.screenContainer}>
            <View  style={styles.headView}>
                <View  style={styles.textContainer}>
                    <View style={styles.textBg}><Text style={styles.textStyle}><Icon size={10} name='circle' type='material-community' color='#feb916' /> ACCOMODATION</Text></View>
                    <View><Text style={styles.textStyle}>FLIGHTS</Text></View>
                    <View ><Text style={styles.textStyle}>TRAINS</Text></View>                   
                </View> 
                <View  style={styles.userContainer}>
                    <View><Text style={styles.userName}>Hi Wilden,</Text></View>
                    <View ><Text style={styles.userName}>Where do you want to stay ?</Text></View>
                    <View style={styles.input}>
                    <TextInput                       
                        placeholder="Your Destination"
                        placeholderTextColor="#FFFFFF"
                        style={{ height: 40, borderWidth: 0, backgroundColor:"#adcbfd", borderRadius:8, paddingLeft:15, fontSize:13, color:"#fff" }}
                    />                
                </View>                  
                </View>               
            </View>
            <View>
                <View  style={{flexDirection:"row",justifyContent:"space-between",width:"90%",alignItems:"center",marginLeft:"6%",marginTop:5,height:70,}}>
                    <View>
                        <Text style={styles.locationHeadText}>Near You</Text>
                        <Text style={{color:"#666"}}>12 Hotels Found</Text>
                    </View>
                    <View>                   
                        <Text style={styles.locationHeadText}>MORE</Text>
                    </View>
                </View>
                <ScrollView style={styles.scrollView}>
                <View>
                <TouchableOpacity onPress={()=> this.redirectToHotelView()}>
                <View style={{flexDirection:"row",width:"90%",marginLeft:"6%",marginTop:20,height:130,}}>
                    <View>
                        <Image
                        source={require("../../images/resort1.jpg")}
                        style={{ width: 110, height: 110, borderRadius:8 }}
                        />
                    </View>
                    <View style={{ paddingLeft:20 }}>
                        <Text style={styles.locationHeadText}>The Rose Hotel  <Icon size={25} name='bookmark' type='material-community' color='#ccc' />  </Text>
                        <View style={{flexDirection:"row"}}>
                        <Icon size={20} name='star' type='material-community' color='#feb916' />
                        <Icon size={20} name='star' type='material-community' color='#feb916' />
                        <Icon size={20} name='star' type='material-community' color='#feb916' />
                        <Icon size={20} name='star' type='material-community' color='#feb916' />
                        <Icon size={20} name='star' type='material-community' color='#ccc' />                        
                       
                        </View>
                        <Text style={{color:"#666",marginTop:8}}>Start from</Text>
                        <View style={{flexDirection:"row",}}>
                            <Text style={{color:"#5f83e0",fontSize:25,fontWeight:"900"}}>$60</Text>
                            <Text style={{color:"#777",fontSize:15,marginTop:8,fontWeight:"800",letterSpacing:1}}>/Night</Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:"#eee",color:"#666",height:30,width:"100%",flexDirection:"row",width:"90%",marginLeft:"6%",borderRadius:3,justifyContent:"space-around"}}>
                                                
                    <Text style={{color:"#666",fontSize:12,marginTop:8,fontWeight:"800",}}>
                        <Icon size={10} name='circle' type='material-community' color='#aaa' /> 10m From your location
                    </Text>
                    <Text style={{color:"#666",fontSize:12,marginTop:8,fontWeight:"800",}}>
                        <Icon size={10} name='circle' type='material-community' color='#aaa' /> 2 Rooms
                    </Text>
                    <Text style={{color:"#666",fontSize:12,marginTop:8,fontWeight:"800",}}>
                        <Icon size={10} name='circle' type='material-community' color='#aaa' /> 10 Facilities
                    </Text>
                </View>              
                <View style={{flexDirection:"row",width:"90%",marginLeft:"6%",marginTop:20,height:130,}}>
                    <View>
                        <Image
                        source={require("../../images/resort1.jpg")}
                        style={{ width: 110, height: 110, borderRadius:8 }}
                        />
                    </View>
                    <View style={{ paddingLeft:20 }}>
                        <Text style={styles.locationHeadText}>The Rose Hotel  <Icon size={25} name='bookmark' type='material-community' color='#ccc' />  </Text>
                        <View style={{flexDirection:"row"}}>
                        <Icon size={20} name='star' type='material-community' color='#feb916' />
                        <Icon size={20} name='star' type='material-community' color='#feb916' />
                        <Icon size={20} name='star' type='material-community' color='#feb916' />
                        <Icon size={20} name='star' type='material-community' color='#feb916' />
                        <Icon size={20} name='star' type='material-community' color='#ccc' />                        
                       
                        </View>
                        <Text style={{color:"#666",marginTop:8}}>Start from</Text>
                        <View style={{flexDirection:"row",}}>
                            <Text style={{color:"#5f83e0",fontSize:25,fontWeight:"900"}}>$60</Text>
                            <Text style={{color:"#777",fontSize:15,marginTop:8,fontWeight:"800",letterSpacing:1}}>/Night</Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:"#eee",color:"#666",height:30,width:"100%",flexDirection:"row",width:"90%",marginLeft:"6%",borderRadius:3,justifyContent:"space-around"}}>
                                                
                    <Text style={{color:"#666",fontSize:12,marginTop:8,fontWeight:"800",}}>
                        <Icon size={10} name='circle' type='material-community' color='#aaa' /> 10m From your location
                    </Text>
                    <Text style={{color:"#666",fontSize:12,marginTop:8,fontWeight:"800",}}>
                        <Icon size={10} name='circle' type='material-community' color='#aaa' /> 2 Rooms
                    </Text>
                    <Text style={{color:"#666",fontSize:12,marginTop:8,fontWeight:"800",}}>
                        <Icon size={10} name='circle' type='material-community' color='#aaa' /> 10 Facilities
                    </Text>
                </View>
                </TouchableOpacity>
                </View>
                </ScrollView>
          </View>
          </View>
         {/* </ScrollView>  */}
      </SafeAreaView>
    );

  }
}
