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
            flag: 'null'
        }
    }
    componentDidMount = async() => {
        const { flag } = this.state;
       
        try {
            const value = await AsyncStorage.getItem('flag')
            
            this.setState(
                {
                    flag:value,
                }
            )
        } catch (e) {
            
        }
    }

    render() {
        const { flag } = this.state;
        const AppRouter = AppContainer(flag)
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {
                    flag == 'TRUE' ? <AppRouter /> : <AppRouter />
                }
            </SafeAreaView>
        );
    }
}