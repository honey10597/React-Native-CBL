import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs';

import AsyncStorage from '@react-native-community/async-storage';

import Login from '../scenes/Welcome/Login'
import Welcome from '../scenes/Welcome/Welcome'
import Signup from '../scenes/Welcome/Signup'
import ForgotPassword from '../scenes/Welcome/ForgotPassword'

import Home from '../scenes/Dashboard/Home'
import Bookings from '../scenes/Dashboard/Bookings'
import Profile from '../scenes/Dashboard/Profile'



const AppNavigator = createStackNavigator({
    // Welcome:Welcome,
    // login:Login,
    // signup:Signup,
    // forgot:ForgotPassword,
    home:Home
},
{
    headerMode:'none',
    navigationOptions:{
        headerVisible: false,
    }
}
);

const ho = createStackNavigator({
        Home:Home,
        
},
{
    headerMode:'none',
    navigationOptions:{
        headerVisible: false,
    }
})
const bo = createStackNavigator({
    Bokings:Bookings,   
  
},
{
    headerMode:'none',
    navigationOptions:{
        headerVisible: false,
    }
})
const po = createStackNavigator({
    Profile:Profile
  
},
{
    headerMode:'none',
    navigationOptions:{
        headerVisible: false,
    }
})

const tabNav = createBottomTabNavigator({
    Home:ho,
    Bookings:bo,
    Profile:po
}
)

export const AppContainer = (loginStatus) => {
    return createAppContainer(createSwitchNavigator(
            {
                signOut: AppNavigator,
                tabbar: tabNav
            }
            ,
            {
                initialRouteName: loginStatus ? 'tabbar' : 'signOut'
            }
        )
        )
    }
    
// export default createAppContainer(AppNavigator);