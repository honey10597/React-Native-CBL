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

import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            secureTextEntry:true
        }
    }

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
                        // alert('successfull');

                        var payload = {
                            // firstName: firstName,
                            // lastName: lastName,
                            // dob: dob,
                            email: email,
                            password: password,
                            // phone_Number: phone_Number,
                            // country_Code: country_Code
                        }
                
                        axios.post('http://192.168.0.50:9988/login',payload)
                          .then(function (response) {
                            console.error(response);
                          })
                          .catch(function (error) {
                            console.error(error);
                          });

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


    

    forgotFun=()=>{
        (this.props.navigation.navigate('forgot'))
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <ImageBackground source={require('../../assets/login_banner/login_banner.png')}
                        style={{ height: verticalScale(211), width: scale(360), justifyContent: 'center' }}
                    >
                        <Text style={{
                            textAlign: 'center', fontWeight: 'bold',
                            fontSize: moderateScale(32), color: 'white'
                        }}>LOGIN</Text>
                    </ImageBackground>

                    <View style={{
                        marginTop: moderateScale(44), marginHorizontal: moderateScale(24),
                        borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: moderateScale(1)
                    }}>
                        <Text style={{ opacity: moderateScale(0.5), fontSize: moderateScale(14), lineHeight: moderateScale(16) }} >
                            Email address
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
                            <TouchableOpacity style={{justifyContent:'center'}} onPress={this.showPassword} >
                                <Image source={this.state.secureTextEntry == true
                                    ?  require('../../assets/hide-button/hide_button.png'):
                                    require('../../assets/ic_visibility_active/visibility_blue.png')
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
                        <Text style={{ textAlign: 'right', color: '#89D6CE', fontSize: moderateScale(14) }}>
                            Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: moderateScale(48), justifyContent: 'center', borderRadius: moderateScale(4), backgroundColor: '#89D6CE',
                        marginHorizontal: moderateScale(24), marginTop: moderateScale(40)
                    }}
                        onPress={this.checkInputValidation}
                    >
                        <Text style={{
                            fontWeight: 'bold', fontSize: moderateScale(12), textAlign: 'center',
                            color: '#FFFFFF', lineHeight: moderateScale(16),letterSpacing:moderateScale(2)
                        }}>
                            LOGIN
                            </Text>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'center',
                        marginTop: moderateScale(72), marginBottom: moderateScale(40)
                    }}>
                        <Text style={{ fontSize: moderateScale(14), opacity: moderateScale(0.5) }}>
                            Not a member?
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: moderateScale(14) }} >
                                Join Now.
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}