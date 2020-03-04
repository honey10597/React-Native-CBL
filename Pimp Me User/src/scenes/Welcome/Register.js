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

import Login from './Login'

import {
    scale,
    verticalScale,
    moderateScale
} from 'react-native-size-matters';

import Signup from './Signup';

export default class Register extends React.Component {

    state = {
        flag: this.props.navigation.getParam('CURRENT_STATUS'),
        opacityLogin: 0.5,
        opacityRegister: 0.5,
        secureTextEntry: true,
        backgroundColorHeaderLogin:'rgba(224,17,95,1)',
        backgroundColorHeaderRegister:'rgba(224,17,95,1)'
    }
    componentDidMount = () => {
        const { flag } = this.state;

        if (flag === "LOGIN") {
           
            this.setState({
                opacityLogin: 1,
                opacityRegister: 0.5,
                backgroundColorHeaderLogin:'rgba(224,17,95,1)',
                backgroundColorHeaderRegister:'white'
            })
        } else { 
            this.setState({
                opacityRegister: 1,
                opacityLogin: 0.5,
                backgroundColorHeaderLogin:'white',
                backgroundColorHeaderRegister:'rgba(224,17,95,1)'
            })
        }

    }
    loginFunction = () => {
        this.setState({
            flag: 'LOGIN',
            opacityLogin: 1,
            opacityRegister: 0.5,
            backgroundColorHeaderLogin:'rgba(224,17,95,1)',
            backgroundColorHeaderRegister:'white'
        })
    }
    registerFunction = () => {
        this.setState({
            flag: 'REGISTER',
            opacityRegister: 1,
            opacityLogin: 0.5,
            backgroundColorHeaderLogin:'white',
            backgroundColorHeaderRegister:'rgba(224,17,95,1)'
        })
    }


    showPassword = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
        })
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
                <ScrollView>

                    <View style={{ marginTop: moderateScale(48), marginLeft: moderateScale(24) }}>
                        <Image source={require('../../assets/logo_big/logo_big.png')} />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: moderateScale(46), marginHorizontal: moderateScale(24) }}>
                        <View>
                            <TouchableOpacity onPress={this.loginFunction}>
                            <Text style={{
                                fontSize: moderateScale(20), lineHeight: moderateScale(24)
                                , opacity: this.state.opacityLogin
                            }}>LOGIN</Text>
                        </TouchableOpacity>
                        <View style={{marginTop:moderateScale(10), height:moderateScale(2),width:moderateScale(14),backgroundColor:this.state.backgroundColorHeaderLogin}}></View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ marginLeft: moderateScale(24) }}
                            onPress={this.registerFunction}
                        >
                            <Text style={{
                                fontSize: moderateScale(20), lineHeight: moderateScale(24)
                                , opacity: this.state.opacityRegister
                            }}>REGISTER</Text>
                        </TouchableOpacity>
                        <View style={{marginTop:moderateScale(10),marginLeft: moderateScale(24), height:moderateScale(2),width:moderateScale(14),backgroundColor:this.state.backgroundColorHeaderRegister}}></View>
                        </View>
                        
                    </View>
                    <View style={{ marginTop: moderateScale(58) }}>
                        {
                            this.state.flag == 'LOGIN' ?
                                <View style={{ flex: 1 }}>
                                    <Login navigation={this.props.navigation}/>
                                </View>
                                :
                                <View style={{ flex: 1 }}>
                                    <Signup navigation={this.props.navigation}/>
                                </View>
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}