import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class Welcome extends React.Component {
   
    log=()=>{
        var headerName="LOGIN";
        // this.props.navigation.navigate("login")
        this.props.navigation.navigate("login",{
            loginpage:headerName
        })
    }

    sign=()=>{
        var headerName="SIGNUP"
        this.props.navigation.navigate("signup",{
            signuppage:headerName
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={{ uri: 'https://3.bp.blogspot.com/-ywjV-EaBkvM/ULTX2VcVwvI/AAAAAAAAAOI/gz0xTDwKB0I/s1600/1080p+beach+wallpaper.jpg' }}
                    style={{ height: '100%', width: '100%' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{
                            position: 'absolute', bottom: 0, left: 0, alignSelf: 'center',
                            width: '50%', justifyContent: 'center',
                            alignItems: 'center', height: moderateScale(48), borderTopWidth: moderateScale(1),
                            borderRightWidth: moderateScale(1), backgroundColor: '#66c2ff'
                        }}
                        onPress={this.log}
                        >
                            <Text style={{ fontSize: moderateScale(14) }}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            position: 'absolute', bottom: 0, right: 0, alignSelf: 'center',
                            width: '50%', justifyContent: 'center',
                            alignItems: 'center', height: moderateScale(48), border: moderateScale(10), borderTopWidth: moderateScale(1), borderLeftWidth: moderateScale(1), backgroundColor: '#66c2ff'
                        }}onPress={this.sign}
                        >
                            <Text style={{ fontSize: moderateScale(14) }}>SIGNUP</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}