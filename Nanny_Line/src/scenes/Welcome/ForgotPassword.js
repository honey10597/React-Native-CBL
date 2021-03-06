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

export default class ForgotPassword extends Component {

    

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <TouchableOpacity style={{
                        marginTop: moderateScale(22),
                        marginLeft: moderateScale(22)
                    }}
                    onPress={() => this.props.navigation.goBack()}
                    >
                        <Image source={require('../../assets/back/back.png')} />
                    </TouchableOpacity>
                    <View style={{
                        height: scale(118), width: scale(118), backgroundColor: 'pink',
                        marginLeft: moderateScale(122), marginTop: moderateScale(44)
                    }}>
                        <Image source={require('../../assets/salon_icon/salon_icon.png')} />
                    </View>
                    <View style={{ marginTop: moderateScale(48), justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: moderateScale(24), lineHeight: moderateScale(36),
                            fontWeight: 'bold', textAlign: 'center'
                        }}>Forgot Password</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center', marginHorizontal: moderateScale(44),
                        marginTop: moderateScale(12)
                    }}>
                        <Text style={{
                            lineHeight: moderateScale(24), fontSize: moderateScale(14),
                            textAlign: 'center',opacity:moderateScale(0.8)
                        }}>
                            Enter the email address associated with your account.
                        </Text>
                    </View>

                    <View style={{
                        marginTop: moderateScale(76), marginHorizontal: moderateScale(24),
                        borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: moderateScale(1)
                    }}>
                        <Text style={{ opacity: moderateScale(0.5), fontSize: moderateScale(14),
                             lineHeight: moderateScale(16)}} >
                            Email
                    </Text>
                        <TextInput style={{
                            marginTop: moderateScale(6), fontSize: moderateScale(16), fontFamily: 'Helvetica',
                            lineHeight: moderateScale(20), paddingBottom: moderateScale(12)
                        }}
                            placeholder="schowalter.kamille@yahoo.com"
                            keyboardType="email-address"
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>

                    <TouchableOpacity style={{
                        height: moderateScale(48), justifyContent: 'center', borderRadius: moderateScale(4),
                        backgroundColor: '#89D6CE',marginBottom:moderateScale(80),
                        marginHorizontal: moderateScale(24), marginTop: moderateScale(32)
                    }}
                        onPress={this.checkInputValidation}
                    >
                        <Text style={{
                            fontWeight: 'bold', fontSize: moderateScale(12), textAlign: 'center',
                            color: '#FFFFFF', lineHeight: moderateScale(16),letterSpacing:moderateScale(2)
                        }}>
                            SEND
                            </Text>
                    </TouchableOpacity>


                </ScrollView>
            </SafeAreaView>
        );
    }
}