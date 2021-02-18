import React, { Component }   from "react";
import {View,Text}            from "react-native";
import  HomeStack             from "./src/config/routes.js";
import  AuthStack             from "./src/config/routes.js";
import { createAppContainer } from 'react-navigation';
import AsyncStorage           from '@react-native-community/async-storage';
const HomeStackContainer = createAppContainer(HomeStack);
const AuthStackContainer = createAppContainer(AuthStack);



class App extends Component {
  constructor(props) {
    super(props);
      this.state={
        user_id :"",
        token   :""
      }
  }

  componentDidMount(){
    AsyncStorage.setItem('projectName','pipito');
  }

  render() {
    return( 
        <HomeStackContainer />
        // <AuthStackContainer />
        // <View><Text>Hiiiii ....welcome</Text></View>
      );
  }
}


export default App;