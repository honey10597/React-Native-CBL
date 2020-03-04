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

import {
    scale,
    verticalScale,
    moderateScale
} from 'react-native-size-matters';

export default class SetPassword extends Component {

    state = {
        password: '',
        secureTextEntry: true
    }
    showPassword = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
        })
    }

    passwordCheck = (password) => {
        var num = /^[a-zA-Z\-0-9]{8}$/;
        return num.test(password);
    };

    checkPaswordValidation = () => {
        const { password } = this.state;
        if (password != '') {
            if (this.passwordCheck(password)) {
                alert('Password successfully changed');
                this.props.navigation.navigate('SET_PASSWORD_SUCCESS')

            } else {
                alert('invalid password');
            }
        } else {
            alert('enter password');
        }
    }

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

                    <View style={{ marginTop: moderateScale(48), justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: moderateScale(24), lineHeight: moderateScale(36),
                            fontWeight: 'bold', textAlign: 'center'
                        }}>Set Password</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center', marginHorizontal: moderateScale(44),
                        marginTop: moderateScale(12)
                    }}>
                        <Text style={{
                            lineHeight: moderateScale(24), fontSize: moderateScale(14),
                            textAlign: 'center', opacity: moderateScale(0.8)
                        }}>Set a password for your new account  (+33)345678901</Text>
                    </View>

                    <View style={{
                        marginTop: moderateScale(76), marginHorizontal: moderateScale(24),
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

                    <TouchableOpacity style={{ marginTop: moderateScale(32), flexDirection: 'row', justifyContent: 'flex-end', marginRight: moderateScale(24) }}
                        onPress={this.checkPaswordValidation}
                    >
                        <Image source={require('../../assets/ico_selected/ico_selected.png')}
                            style={{ width: scale(50), height: scale(50) }} />
                    </TouchableOpacity>


                </ScrollView>
            </SafeAreaView>
        );
    }
}