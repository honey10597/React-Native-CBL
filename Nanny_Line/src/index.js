import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { AppContainer } from './router'

export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            flag: null
        }
    }
    componentDidMount = async () => {

        const { flag } = this.state;
        
        try {
            const email = await AsyncStorage.getItem('name')
            
            this.setState(
                {
                    flag: email
                }
                
            );
            // alert(email)
        } catch (e) {
            // error reading value
        }
        // }


        // this.setState({
        //     flag: false
        // })
    }

    render() {
        const { flag } = this.state;
        const AppRouter = AppContainer(flag)
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {
                    
                     flag == null ? <AppRouter/> : <AppRouter/>

                }
            </SafeAreaView>
        );
    }
}