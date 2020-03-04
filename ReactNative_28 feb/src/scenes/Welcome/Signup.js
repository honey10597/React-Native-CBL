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

export default class Signup extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            headerData: this.props.navigation.getParam("signuppage")
        }
    }

    emailCheck = (email) => {
        const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validation.test(email);
    }

    Check = () => {
        const { name, email, password, confirmPassword } = this.state;
        if (name != '') {
            if (email != '') {
                if (this.emailCheck(email)) {
                    if (password != '') {
                        if (password == confirmPassword) {
                            this.props.navigation.navigate("Home");

                        } else {
                            alert('password should be same');
                        }
                    }
                } else {
                    alert('Invalid Email')
                }
            } else {
                alert('Enter Email');
            }

        } else {
            alert('Enter Name');
        }
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
                    <Text style={{ fontSize: moderateScale(20) }}>Name</Text>
                    <TextInput style={{ borderBottomWidth: moderateScale(1), marginTop: moderateScale(6), borderColor: 'black', fontSize: moderateScale(18) }}
                        placeholder="Enter Name"
                        placeholderTextColor="#9a73ef"
                        onChangeText={name => this.setState({ name })}
                    />
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
                <View style={{ marginTop: moderateScale(24), marginHorizontal: moderateScale(16) }}>
                    <Text style={{ fontSize: moderateScale(20) }}>Confirm Password</Text>
                    <TextInput style={{ borderBottomWidth: moderateScale(1), marginTop: moderateScale(6), borderColor: 'black', fontSize: moderateScale(18) }}
                        placeholder="Confirm Password"
                        placeholderTextColor="#9a73ef"
                        secureTextEntry={true}
                        maxLength={8}
                        onChangeText={confirmPassword => this.setState({ confirmPassword })}
                    />
                </View>
                <TouchableOpacity style={{
                    alignSelf: 'center', backgroundColor: 'rgb(224,17,95)', justifyContent: 'center',
                    alignItems: 'center', height: moderateScale(48), marginTop: moderateScale(24),
                    width: '50%', borderRadius: moderateScale(15 / 2)
                }}
                    onPress={this.Check}>
                    <Text style={{
                        fontSize: moderateScale(24), color: 'white',
                        textAlign: 'center'
                    }}>SignUp</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}