import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs';

import AsyncStorage from '@react-native-community/async-storage';

import Login from '../scenes/Welcome/Login'
import Welcome from '../scenes/Welcome/Welcome'
import Signup from '../scenes/Welcome/Signup'

import Home from '../scenes/Dashboard/Home'
import Bookings from '../scenes/Dashboard/Bookings'
import Profile from '../scenes/Dashboard/Profile'
import Detail from '../scenes/Dashboard/Detail';
import Editprofile from '../scenes/Dashboard/Editprofile'


const AppNavigator = createStackNavigator({
    Welcome:Welcome,
    login:Login,
    signup:Signup,
    detail:Detail,   
    editprofile:Editprofile
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
        detail:Detail,   
        editprofile:Editprofile
},
{
    headerMode:'none',
    navigationOptions:{
        headerVisible: false,
    }
})
const bo = createStackNavigator({
    Bokings:Bookings,   
    editprofile:Editprofile
},
{
    headerMode:'none',
    navigationOptions:{
        headerVisible: false,
    }
})
const po = createStackNavigator({
    Profile:Profile,   
    editprofile:Editprofile
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