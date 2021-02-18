import React from 'react';
import { createSwitchNavigator }  from 'react-navigation';
import { createDrawerNavigator }  from 'react-navigation-drawer';
import { createStackNavigator }   from 'react-navigation-stack';
import { createAppContainer }     from '@react-navigation/native';

import AuthLoadingScreen          from '../layouts/AuthLoading/AuthLoading.js'; 
import SideMenu                   from '../layouts/SideMenu/SideMenu.js';
import Home                       from '../screens/Home/Home.js';
import RestaurantHome             from  '../screens/Restaurant/RestaurantHome.js';
import RestaurantView             from '../screens/RestaurantView/RestaurantView.js'
import RestaurantList             from '../screens/RestaurantList/RestaurantList.js';



const HomeStack = createStackNavigator({
  
  Home:{
    screen:Home,
    navigationOptions:{
      headerShown: null,
    }
  },
  RestaurantView:{
    screen:RestaurantView,
    navigationOptions:{
      headerShown: null,
    }
  },

  RestaurantList:{
    screen:RestaurantList,
    navigationOptions:{
      headerShown: null,
    }
  },

});

const AuthStack = createStackNavigator({
  RestaurantHome:{
     screen:RestaurantHome,
     navigationOptions:{
       headerShown: null,
     }
   },
 });

const drawer = createDrawerNavigator({
	Home : {
		screen: HomeStack
	}
},{
  drawerLockMode: 'locked-closed',
  contentComponent: SideMenu,
  drawerPosition: 'left'
});




// export default HomeStack;
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: drawer,
    Auth: AuthStack,
  },
  {
    unmountInactiveRoutes: true,
    initialRouteName: 'AuthLoading',
  }
));