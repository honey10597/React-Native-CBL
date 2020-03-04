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

import DatePicker from 'react-native-datepicker'

export default class Signup extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            dob: '',
            email: '',
            password: '',
            phone_Number: '',
            country_Code: '',
            checkFlag: 'false'
        }
    }


    validateEmail = (email) => {
        const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validation.test(email);
    }

    validatePhoneNumber = (phoneNum) => {
        var num = /^[0-9]{10}$/;
        return num.test(phoneNum);
    };

    validatePassword = (password) => {
        var num = /^[0-9]{8}$/;
        return num.test(password);
    };

    validateCountryCode = (countryCode) => {
        var num = /^[0-9]{4}$/;
        return num.test(countryCode);
    };

    checkInputValidation = () => {
        const { firstName, lastName, dob, email, password, phone_Number, country_Code, checkFlag } = this.state;

            if (firstName != '') {
                if (lastName != '') {
                    if (dob != '') {
                        if (email != '') {
                            if (this.validateEmail(email)) {
                                if (password != '') {
                                    if (this.validatePassword(password)) {
                                        if (phone_Number != '') {
                                            if (this.validatePhoneNumber(phone_Number)) {
                                                if (country_Code != '') {
                                                    if (this.validateCountryCode(country_Code)) {
                                                        alert('Successfull');
                                                        
                                                        (this.props.navigation.navigate('SIGNUP_SUCCCESS'))

                                                    } else {
                                                        alert('invalid country code')
                                                    }
                                                } else {
                                                    alert('invalid country code');
                                                }
                                            } else {
                                                alert('invalid phone number');
                                            }
                                        } else {
                                            alert('enter phone number');
                                        }
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
                            alert('enter date of birth');
                        }
                    } else {
                        alert('enter date of birth');
                    }
                } else {
                    alert('enter last name');
                }
            } else {
                alert('enter first name');
            }
        
    }

    checkFun = () => {
        const { checkFlag } = this.state;
        if (checkFlag == 'false') {
            this.setState({
                checkFlag: 'true'
            })
        } else {
            this.setState({
                checkFlag: 'false'
            })
        }

    }


    render() {
        const { firstName, lastName, dob, email, password, phone_Number, country_Code, checkFlag } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between'
                        , marginHorizontal: moderateScale(24)
                    }}>
                        <View style={{
                            width: moderateScale(148), borderBottomColor: 'rgba(0,0,0,0.1)',
                            borderBottomWidth: moderateScale(1)
                        }}>
                            <Text style={{ opacity: moderateScale(0.5), fontSize: moderateScale(14), lineHeight: moderateScale(16) }} >
                                First Name
                            </Text>
                            <TextInput style={{
                                marginTop: moderateScale(6), fontSize: moderateScale(16), fontFamily: 'Helvetica',
                                lineHeight: moderateScale(18), textAlign: 'left', paddingBottom: moderateScale(12)
                            }}
                                placeholder="Marian"
                                onChangeText={firstName => this.setState({ firstName })}
                            />
                        </View>

                        <View style={{
                            width: moderateScale(148), borderBottomColor: 'rgba(0,0,0,0.1)',
                            borderBottomWidth: moderateScale(1)
                        }}>
                            <Text style={{ opacity: moderateScale(0.5), fontSize: moderateScale(14), lineHeight: moderateScale(16) }} >
                                Last Name
                            </Text>
                            <TextInput style={{
                                marginTop: moderateScale(6), fontSize: moderateScale(16), fontFamily: 'Helvetica',
                                lineHeight: moderateScale(18), paddingBottom: moderateScale(12)
                            }}
                                placeholder="Cohen"
                                onChangeText={lastName => this.setState({ lastName })}
                            />
                        </View>

                    </View>

                    <View style={{
                        borderBottomColor: 'rgba(0,0,0,0.1)',
                        borderBottomWidth: moderateScale(1), marginHorizontal: moderateScale(24),
                        marginTop: moderateScale(28)
                    }}>
                        <Text style={{ opacity: moderateScale(0.5), fontSize: moderateScale(14), lineHeight: moderateScale(16) }} >
                            Date Of Birth
                            </Text>

                        <DatePicker
                            style={{ width: '100%', }}
                            date={this.state.dob}
                            placeholder="DD/MM/YYYY"
                            format="DD/MM/YYYY"
                            minDate="1950/01/01"
                            maxDate="2020/02/20"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            iconSource={require('../../assets/back_circle/back_circle.png')}
                            customStyles={{
                                dateIcon: {
                                    // position: 'absolute',
                                    right: moderateScale(0)
                                    // height:0,width:0
                                },
                                dateInput: {
                                    borderWidth: moderateScale(0), fontSize: moderateScale(16), alignItems: "flex-start"
                                },
                                dateText: {
                                    fontSize: moderateScale(16),
                                    color: "black",
                                    textAlign: "left"
                                }
                            }}
                            onDateChange={(date) => { this.setState({ dob: date }) }}
                        />
                    </View>

                    <View style={{
                        marginTop: moderateScale(28), marginHorizontal: moderateScale(24),
                        borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: moderateScale(1)
                    }}>
                        <Text style={{ opacity: moderateScale(0.5), fontSize: moderateScale(14), lineHeight: moderateScale(16) }} >
                            Email
                    </Text>
                        <TextInput style={{
                            marginTop: moderateScale(6), fontSize: moderateScale(16), fontFamily: 'Helvetica',
                            lineHeight: moderateScale(20), paddingBottom: moderateScale(12)
                        }}
                            placeholder="hello@gmail.com"
                            keyboardType="email-address"
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>

                    <View style={{
                        marginTop: moderateScale(28), marginHorizontal: moderateScale(24),
                        borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: moderateScale(1)
                    }}>
                        <Text style={{ opacity: moderateScale(0.5), fontSize: moderateScale(14), lineHeight: moderateScale(16) }} >
                            Password
                    </Text>
                        <TextInput style={{
                            marginTop: moderateScale(6), fontSize: moderateScale(16), fontFamily: 'Helvetica',
                            lineHeight: moderateScale(20), paddingBottom: moderateScale(12)
                        }}
                            maxLength={8}
                            placeholder="**********"
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>

                    <View style={{
                        marginTop: moderateScale(28), marginHorizontal: moderateScale(24),
                        borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: moderateScale(1)
                    }}>
                        <Text style={{ opacity: moderateScale(0.5), fontSize: moderateScale(14), lineHeight: moderateScale(16) }} >
                            Phone Number
                    </Text>
                        <TextInput style={{
                            marginTop: moderateScale(6), fontSize: moderateScale(16), fontFamily: 'Helvetica',
                            lineHeight: moderateScale(20), paddingBottom: moderateScale(12)
                        }}
                            maxLength={10}
                            placeholder="1234567890"
                            keyboardType='numeric'
                            onChangeText={phone_Number => this.setState({ phone_Number })}
                        />
                    </View>

                    <View style={{
                        marginTop: moderateScale(28), marginHorizontal: moderateScale(24),
                        borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: moderateScale(1)
                    }}>
                        <Text style={{ opacity: moderateScale(0.5), fontSize: moderateScale(14), lineHeight: moderateScale(16) }} >
                            Country Code
                    </Text>
                        <TextInput style={{
                            marginTop: moderateScale(6), fontSize: moderateScale(16), fontFamily: 'Helvetica',
                            lineHeight: moderateScale(20), paddingBottom: moderateScale(12)
                        }}
                            maxLength={4}
                            placeholder="1234"
                            keyboardType="numeric"
                            onChangeText={country_Code => this.setState({ country_Code })}
                        />
                    </View>

                    {/* <View style={{
                        marginLeft: moderateScale(26), marginRight: moderateScale(16),
                        marginTop: moderateScale(26), flexDirection: 'row'
                    }}>
                        <TouchableOpacity onPress={this.checkFun}>
                            <Image source={checkFlag == 'false' ?
                                require('../../assets/unCheck/blue_check.png') :
                                require('../../assets/check/blue_check_selected.png')
                            } />
                        </TouchableOpacity>
                        <View style={{ marginLeft: moderateScale(10), marginRight: moderateScale(16) }}>
                            <View style={{
                                flexDirection: 'row',            marginRight: moderateScale(16), flexWrap: 'wrap'
                            }}>
                                <Text style={{ color: 'rgba(0,0,0,0.5)' }}>By Logging in, you agree to Dusk's</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: "black", fontWeight: 'bold' }}> Privacy Policy</Text>
                                </TouchableOpacity>
                                <Text> and </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: "black", fontWeight: 'bold' }}> Terms of Use</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> */}

                    <TouchableOpacity style={{
                        height: moderateScale(48), justifyContent: 'center', borderRadius: moderateScale(4), backgroundColor: '#FF0090',
                        marginHorizontal: moderateScale(24), marginTop: moderateScale(32), marginBottom: moderateScale(42)
                    }}
                        onPress={this.checkInputValidation}
                    >
                        <Text style={{
                            fontWeight: 'bold', fontSize: moderateScale(12), textAlign: 'center',
                            color: '#FFFFFF', lineHeight: moderateScale(16), letterSpacing: moderateScale(2)
                        }}>
                            SIGNUP
                            </Text>
                    </TouchableOpacity>

                </ScrollView>

            </SafeAreaView>
        );
    }
}