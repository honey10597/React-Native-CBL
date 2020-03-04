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

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            headerData: this.props.navigation.getParam("loginpage")
        }
    }

    emailCheck = (email) => {
        const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validation.test(email);
    }

    Check = async () => {
        const { email, password } = this.state;
        if (email != '') {
            if (this.emailCheck(email)) {
                if (password != '') {
                    // const name = email;
                    try {
                        await AsyncStorage.setItem('name', email)
                        // alert(name);
                    } catch (e) {
                        // saving error
                    }
                    this.props.navigation.navigate("Home");
                    alert('successful');
                } else { alert("Enter your password") }
            } else { alert("Your email not valid") }
        } else { alert("Enter you emails") }
    }



    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ height: moderateScale(56), backgroundColor: 'rgb(224,17,95)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                        <Image source={require("../../assets/back_circle/back_circle.png")} style={{ marginTop: moderateScale(8) }} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: moderateScale(24), color: 'white' }}>{this.state.headerData}</Text>

                    <View><Text>                  </Text></View>
                </View>

                <View style={{ marginTop: moderateScale(24), marginHorizontal: moderateScale(16) }}>
                    <Text style={{ fontSize: moderateScale(20) }}>Email</Text>
                    <TextInput style={{ borderBottomWidth: moderateScale(1), marginTop: moderateScale(6), borderColor: 'black', fontSize: moderateScale(18) }}
                        placeholder="Enter Email"
                        placeholderTextColor="#9a73ef"
                        keyboardType="email-address"
                        onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View style={{ marginTop: moderateScale(24), marginHorizontal: moderateScale(16) }}>
                    <Text style={{ fontSize: moderateScale(20) }}>Password</Text>
                    <TextInput style={{ borderBottomWidth: moderateScale(1), marginTop: moderateScale(6), borderColor: 'black', fontSize: moderateScale(18) }}
                        placeholder="Enter Password"
                        placeholderTextColor="#9a73ef"
                        secureTextEntry={true}
                        maxLength={8}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <TouchableOpacity style={{
                    alignSelf: 'center', backgroundColor: 'rgb(224,17,95)', justifyContent: 'center',
                    alignItems: 'center', height: moderateScale(48), marginTop: moderateScale(24),
                    width: '50%', borderRadius: moderateScale(15 / 2)
                }}
                    onPress={this.Check}>
                    <Text style={{
                        fontSize: moderateScale(20), color: 'white',
                        textAlign: 'center'
                    }}>Login</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}