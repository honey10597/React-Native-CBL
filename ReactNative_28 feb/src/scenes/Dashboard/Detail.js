import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
    scale,
    verticalScale,
    moderateScale
} from 'react-native-size-matters';

export default class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Barack Obama',
            email: 'Barack@gmail.com',
            val: '',
            valTwo: '',
            valThree: ''
        }
    }

    componentDidMount = async () => {
        try {
            const value = await AsyncStorage.getItem('fname')
            const valueTwo = await AsyncStorage.getItem('floc')
            const valueThree = await AsyncStorage.getItem('imggg')
            // alert(valueTwo)
            this.setState(
                {
                    val: value,
                    valTwo: valueTwo,
                    valThree: valueThree
                }
            )
            // alert(value)
        } catch (e) {
            // error reading value
            AsyncStorage.removeItem('value')
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: moderateScale(56), backgroundColor: 'rgb(224,17,95)', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: moderateScale(24), color: 'white' }}>Detail</Text>
                    <TouchableOpacity style={{ position: 'absolute' }} onPress={() => this.props.navigation.goBack()} >
                        <Image source={require("../../assets/back_circle/back_circle.png")} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: moderateScale(140), backgroundColor: 'rgba(224,17,95,0.5)', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: this.state.valThree}}
                        style={{ height: scale(80), width: scale(80), borderRadius: moderateScale(150 / 2) }} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ marginTop: moderateScale(24) }}>
                        <Text style={{ fontSize: moderateScale(24) }}>Name : {this.state.val}</Text>
                    </View>
                    <View style={{ marginTop: moderateScale(24) }}>
                        <Text style={{ fontSize: moderateScale(24) }}>Location : {this.state.valTwo}</Text>
                    </View>
                </View>

            </SafeAreaView>
        );
    }
}