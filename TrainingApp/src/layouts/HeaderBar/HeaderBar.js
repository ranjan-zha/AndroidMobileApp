import React,{Component}   from "react";
import {TouchableOpacity}  from "react-native";
import { Header, Icon  }   from 'react-native-elements';
import styles              from "./styles.js";

export default class HeaderBar extends Component{

  constructor(props) {
    super(props);
    // console.log("props",props);
  }
          
  render() {
    return (
      <Header
        placement="center"
        leftComponent={
            <TouchableOpacity style={{width:40}} onPress={()=> this.props.navigation.toggleDrawer()}>
              <Icon size={28} name='menu' type='material-community' color='#fff' />
            </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity style={{width:50} } onPress={()=> this.props.navigation.navigate('InAppNotification')}>
             <Icon size={28} name='bell' type='material-community' color='#fff' />
          </TouchableOpacity>
        }
        containerStyle={styles.container}
      />
    );
  }
}


