import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class Welcome extends React.Component {

    loginScreen = () => {
        
        (this.props.navigation.navigate('LOGIN_CLICK',
        {'CURRENT_STATUS':'LOGIN'}))
    }

    signupScreen = () => {
        (this.props.navigation.navigate('REGISTER_CLICK',
        {'CURRENT_STATUS':'REGISTER'}))
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <ImageBackground source={require('../../assets/background/background.png')}
                    style={{ height: '100%', width: '100%', }}>
                    <ScrollView>
                        <TouchableOpacity style={styles.connectWithFacebookTouchable}>

                            <Image source={require('../../assets/ic_facebook/ic_facebook.png')}
                                style={{ marginLeft: moderateScale(16) }} />

                            <Text style={styles.touchableText}>CONNECT WITH FACEBOOK</Text>
                            <View>

                            </View>
                        </TouchableOpacity>

                        <View style={styles.registerLoginView}>
                            <TouchableOpacity style={styles.registerTouchable}
                                onPress={this.signupScreen}>
                                <Text style={styles.touchableText}>REGISTER</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginTouchable}
                                onPress={this.loginScreen}>
                                <Text style={styles.touchableText}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginHorizontal: moderateScale(36) }}>
                            <View style={styles.policyView}>
                                <Text style={styles.policyText}>By Logging in, you agree to Pimpme</Text>
                                <TouchableOpacity>
                                    <Text style={styles.policyTouchable}> Privacy Policy</Text>
                                </TouchableOpacity>
                                <Text style={styles.policyText}> and </Text>
                                <TouchableOpacity>
                                    <Text style={styles.policyTouchable}> Terms of Use</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    connectWithFacebookTouchable: {
        marginTop: moderateScale(450), height: moderateScale(48), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        backgroundColor: '#3E60AA', marginHorizontal: moderateScale(24), borderRadius: moderateScale(2)
    },
    touchableText: {
        fontSize: moderateScale(12), lineHeight: moderateScale(16),
        letterSpacing: moderateScale(1), color: '#FFFFFF', textAlign: 'center',fontFamily:'Helvetica-Bold'
    },
    registerTouchable: {
        height: verticalScale(48), width: scale(148), justifyContent: 'center'
        , borderWidth: moderateScale(1), borderColor: 'white', borderRadius: moderateScale(2)
    },
    loginTouchable: {
        height: verticalScale(48), width: scale(148), justifyContent: 'center',
        backgroundColor: '#E0115F', borderRadius: moderateScale(2)
    },
    registerLoginView: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScale(16),
        marginHorizontal: moderateScale(24)
    },
    policyView: {
        marginTop: moderateScale(20), justifyContent: 'center', marginBottom: moderateScale(20),
        flexDirection: 'row', marginRight: moderateScale(16), flexWrap: 'wrap'
    },
    policyText: {
        textAlign: 'center', color: '#FFFFFF',
        fontSize: moderateScale(12), lineHeight: moderateScale(20)
    },
    policyTouchable: {
        textAlign: 'center', color: "#E0115F", fontWeight: 'bold'
        , fontSize: moderateScale(12), lineHeight: moderateScale(20)
    }
});