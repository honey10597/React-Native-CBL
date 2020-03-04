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
import navigation from 'react-navigation';
import {
    scale,
    verticalScale,
    moderateScale
} from 'react-native-size-matters';

import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {

    state = {
        email: '',
        password: '',
        flag: 'LOGIN',
        opacityLogin: 0.5,
        opacitySignup: 0.5,
        secureTextEntry: true
    }
    componentDidMount = () => {
        if (this.state.flag == 'LOGIN') {
            this.setState({
                opacityLogin: 1
            })
        } else {
            this.setState({

                opacityLogin: 0.5
            })
        }
    }
    // loginFunction = () => {
    //     this.setState({
    //         flag: 'LOGIN',
    //         opacityLogin: 1,
    //         opacitySignup: 0.5,
    //         email: '',
    //         password: '',
    //         flag: ''
    //     })
    // }
    // registerFunction = () => {
    //     this.setState({
    //         flag: 'REGISTER',
    //         opacitySignup: 1,
    //         opacityLogin: 0.5
    //     })
    // }


    showPassword = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
        })
    }

    emailCheck = (email) => {
        const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validation.test(email);
    }
    passwordCheck = (password) => {
        var num = /^[a-zA-Z\-0-9]{8}$/;
        return num.test(password);
    };

    checkInputValidation = () => {
        const { email, password } = this.state;
        if (email != '') {
            if (this.emailCheck(email)) {
                if (password != '') {
                    if (this.passwordCheck(password)) {
                        alert('successfull');
                        try {
                            AsyncStorage.setItem('flag', 'TRUE')

                        } catch (e) {
                        }
                        (this.props.navigation.navigate('LOGIN_SUCCESS'))

                    } else {
                        alert('invalid password');
                    }
                } else {
                    alert('enter password');
                }
            } else {
                alert('invalid email');
            }
        } else {
            alert('enter email');
        }
    }

    forgotFun = () => {
        this.props.navigation.navigate('FORGOT_PASSWORD')
        // alert('forgot password clicked')
    }


    render() {
        return (


            <View style={{ marginTop: moderateScale(0) }}>
                <View>

                    <View style={{
                        marginHorizontal: moderateScale(24),
                        borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: moderateScale(1)
                    }}>
                        <Text style={{ opacity: moderateScale(0.5), fontSize: moderateScale(14), lineHeight: moderateScale(16) }} >
                            Email address / Phone Number
                                        </Text>
                        <TextInput style={{
                            marginTop: moderateScale(6), fontSize: moderateScale(16), fontFamily: 'Helvetica',
                            lineHeight: moderateScale(20), paddingBottom: moderateScale(12)
                        }}
                            placeholder="rosiebrown123@yahoo.c"
                            keyboardType="email-address"
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>

                    <View style={{
                        marginTop: moderateScale(28), marginHorizontal: moderateScale(24),
                        borderBottomWidth: moderateScale(1), borderBottomColor: 'rgba(0,0,0,0.1)'
                    }}>
                        <Text style={{
                            opacity: moderateScale(0.5), fontSize: moderateScale(14),
                            lineHeight: moderateScale(16)
                        }} >
                            Password
                    </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput style={{
                                marginTop: moderateScale(6), fontSize: moderateScale(16), fontFamily: 'Helvetica',
                                lineHeight: moderateScale(20), width: moderateScale(290),
                                paddingBottom: moderateScale(12)
                            }}
                                placeholder="********"
                                secureTextEntry={this.state.secureTextEntry}
                                maxLength={8}
                                onChangeText={password => this.setState({ password })}
                            />
                            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={this.showPassword} >
                                <Image source={this.state.secureTextEntry == true
                                    ? require('../../assets/hide-button/hide_button.png') :
                                    require('../../assets/visibility-button/visibility-button.png')
                                }
                                    style={{
                                        alignSelf: 'flex-end'
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <TouchableOpacity style={{ marginTop: moderateScale(24), marginRight: moderateScale(24) }}
                        onPress={this.forgotFun}>
                        <Text style={{ textAlign: 'right', color: '#E0115F', fontSize: moderateScale(14) }}>
                            Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: moderateScale(48), justifyContent: 'center', borderRadius: moderateScale(4), backgroundColor: '#E0115F',
                        marginHorizontal: moderateScale(24), marginTop: moderateScale(40)
                    }}
                        onPress={this.checkInputValidation}
                    >
                        <Text style={{
                            fontWeight: 'bold', fontSize: moderateScale(12), textAlign: 'center',
                            color: '#FFFFFF', lineHeight: moderateScale(16), letterSpacing: moderateScale(2)
                        }}>
                            LOGIN
                            </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: moderateScale(72) }}>
                    <Text style={{ fontSize: moderateScale(14), lineHeight: moderateScale(24), color: '#7F7F7F' }}>Not a member?</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: moderateScale(14), lineHeight: moderateScale(24), color: '#E0115F' }}> Join Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}