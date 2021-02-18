import React from 'react';
import {
  ScrollView,
  Text,
  Dimensions
} from 'react-native';

import styles 				from './styles.js';
const window = Dimensions.get('window');

export default class SideMenu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      firstName      : "",
      vendorInfo     : "" 
    };
  }	

componentDidMount(){
	
}

 


  render(){
	  	return(
	      	<ScrollView contentContainerStyle={[styles.container]} scrollsToTop={false}>
			     <Text>Training App</Text>
	  		</ScrollView>
	  	);
	}

}

