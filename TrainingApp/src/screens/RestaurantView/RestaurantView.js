import React,{Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {Icon}    from 'react-native-elements';
const window = Dimensions.get('window');

export default class RestaurantView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  redirectToList(){
   this.props.navigation.navigate('RestaurantList')
  }

  onPressButton() {  
    alert('You clicked the button!')  
}  

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
   return (
    <ScrollView >  
     <View style={styles.container}>
        <View style={{backgroundColor:"#fff", height:60,flexDirection:"row",justifyContent:"space-between",padding:"5%",alignItems:"center"}} >
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
        <View>
        <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:20}}>
        <ScrollView  horizontal={true} style={styles.container2}>  
            <Image
            source={require("../../images/resort4.jpg")}
            style={{ width: 220, height: 250, borderRadius:8, marginRight:15, }}
            />
            
            <Image
            source={require("../../images/resort1.jpg")}
            style={{ width: 240, height: 250, borderRadius:8 ,marginRight:15,}}
            />
            <Image
            source={require("../../images/resort3.jpg")}
            style={{ width: 240, height: 250, borderRadius:8 , marginRight:15,}}
            />
            <Image
            source={require("../../images/resort2.jpg")}
            style={{ width: 240, height: 250, borderRadius:8 }}
            />
            </ScrollView>
        </View>
        </View>
        <View>
        
        <View style={{ paddingLeft:20,height:70, marginTop:20 }}>
            <Text style={styles.locationHeadText}>The Rose Hotel  <Icon size={20} name='bookmark' type='material-community' color='#5f83e0' />  </Text>
            <View style={{flexDirection:"row", }}>
            <Icon size={20} name='star' type='material-community' color='#feb916' />
            <Icon size={20} name='star' type='material-community' color='#feb916' />
            <Icon size={20} name='star' type='material-community' color='#feb916' />
            <Icon size={20} name='star' type='material-community' color='#feb916' />
            <Icon size={20} name='star' type='material-community' color='#ccc' />                        
            <Text style={{color:"#5f83e0"}}> 4.2 /</Text>
            <Text style={{color:"#aaa"}}> (120 reviews)</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:10,width:"70%"}}>
                <Text style={{color:"#333",fontSize:15,fontWeight:"900",marginTop:8, borderBottomColor:"#5f83e0",borderWidth:3, borderTopColor:"#fff",borderLeftColor:"#fff",borderRightColor:"#fff",marginRight:10}}>Description</Text>
                <Text style={{color:"#777",fontSize:15,marginTop:8,fontWeight:"800",letterSpacing:1,marginRight:10}}>Rooms</Text>
                <Text style={{color:"#777",fontSize:15,marginTop:8,fontWeight:"800",letterSpacing:1}}>Review (120)</Text>
            </View>
            <View>
                <Text style={{color:"#666", padding:10}}>
                    Hotel Rose Lodge offers accommodations with a restaurant, free private parking, a bar and a shared lounge. All rooms feature a flat-screen TV with cable channels and a private bathroom. 
                </Text>
            </View>
            <TouchableOpacity onPress={()=> this.redirectToList()}>
            <View style={{height:50,backgroundColor:"orange",width:"90%",alignItems:"center",borderRadius:12,}}>
                <Text style={{color:"#fff", fontSize:20,alignItems:"center",paddingTop:10}}>
                    SELECT ROOM
                </Text>
            </View>
            </TouchableOpacity>
        </View>
        </View>
     </View>
    </ScrollView> 
    );

  }
}
const styles = StyleSheet.create({  
    container:{  
        flex: 1,
        backgroundColor:"#fff",
        height:600,
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
}) 