import React,{Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import {Button, Icon, Input}    from 'react-native-elements';
import { SafeAreaView } from 'react-native';
// import styles                    from './styles.js'
const window = Dimensions.get('window');

export default class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
  }

  redirectToHome(){
    this.props.navigation.navigate('Home')
  }

  onPressButton() {  
    alert('You clicked the button!')  
}  

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    // const {payload}=this.state;
   return (
    <SafeAreaView>
        <ScrollView>
     <View style={styles.container}>
        <View style={{backgroundColor:"#fff", height:80,flexDirection:"row",justifyContent:"space-between",padding:"5%",alignItems:"center",}} >
            <View>
                <Text style={{color:"#333",fontSize:20,marginTop:50,fontWeight:"800",}}>
                        <Icon size={20} name='arrow-left' type='material-community' color='#333' /> Details
                    </Text>
            </View>
            <View>
                <Text style={{color:"#333",fontSize:12,marginTop:50,fontWeight:"800",}}>
                    <Icon size={20} name='bell' type='material-community' color='#333' /> 
                </Text>
            </View>
        </View>
        <View style={{padding:"5%",}}>
            <Text style={{color:"#aaa"}}>Location</Text>
            <Text style={{color:"#5f83e0",fontSize:26,fontWeight:"900"}}>Pasuruan</Text>
            <View style={{flexDirection:"row"}}>
                <View style={styles.textBg}><Text style={styles.textStyle}>MALANG</Text></View>
                <View style={styles.textBg}><Text style={styles.textStyle}>JAKARTA</Text></View>
                <View style={styles.textBg}><Text style={styles.textStyle}>SURBHYA</Text></View>
            </View>
        </View>
        <View>
        {/* <ScrollView style={styles.scrollView}> */}
        <View> 
        <View style={{flexDirection:"row",width:"90%",marginLeft:"6%",marginTop:20,height:130,}}>
                    <View>
                        <Image
                        source={require("../../images/resort4.jpg")}
                        style={{ width: 110, height: 110, borderRadius:8 }}
                        />
                    </View>
                    <View style={{ paddingLeft:20 }}>
                        <Text style={styles.locationHeadText}>Terres Royal Hotel  <Icon size={25} name='bookmark' type='material-community' color='#ccc' />  </Text>
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
                        <Text style={styles.locationHeadText}>The Rose Hotel  <Icon size={25} name='bookmark' type='material-community' color='#5f83e0' />  </Text>
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
                        source={require("../../images/resort2.jpg")}
                        style={{ width: 110, height: 110, borderRadius:8 }}
                        />
                    </View>
                    <View style={{ paddingLeft:20 }}>
                        <Text style={styles.locationHeadText}>The Hayatt Hotel  <Icon size={25} name='bookmark' type='material-community' color='#5f83e0' />  </Text>
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
                </View>
           
        
        </View>
        
     </View>
        </ScrollView> 
            </SafeAreaView>
    );

  }
}
const styles = StyleSheet.create({  
    container:{  
        flex: 1,
        backgroundColor:"#fff",
        height:"auto",
        width:"100%"  
    },
    container2:{  
        flex: 1,  
    },
    locationHeadText:{
        color:"#333",
        fontWeight:"900",
        fontSize:20,
      },
      textBg:{
        backgroundColor:"#d9dff0",
        width:100,
        height:25,
        padding:3,
        marginLeft:5,
        borderRadius:5,
        paddingLeft:5,
        marginTop:10,
  
      }, 
      textStyle:{
        color:"#5f83e0",
        letterSpacing:1,
        alignItems:"center",
        marginLeft:10
        
        
      },    
}) 