import React,{Component} from 'react';
import {
  Dimensions,
} from 'react-native';
import RestaurantHome from '../Restaurant/RestaurantHome.js';
const window = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    var payload = this.props.navigation.getParam('payload');
    this.setState({payload:payload});
  }

  redirectToWelcome(){
    var payload ={
       firstName:this.state.firstName,
       middleName:this.state.middleName,
       lastName:this.state.lastName,
       password:this.state.password
    }
    this.props.navigation.navigate('RestaurantHome');
  }

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const {payload}=this.state;
   return (
      <React.Fragment>
        <RestaurantHome navigation={navigation}/>
      </React.Fragment>
    );

  }
}
