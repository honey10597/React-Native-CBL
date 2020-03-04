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

import Signup from './Signup';

export default class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: 'empty',
            img: 'true'
        }
    }
    componentDidMount=()=>{
        this.setState({
            flag:'empty'
        })
    }
    proceed = () => {
        const { flag } = this.state;
        (this.props.navigation.navigate(flag))
    }

    render() {
        return (
            <SafeAreaView style={{ flex:moderateScale(1)}}>
                <ScrollView>
                    <TouchableOpacity style={{
                        marginTop: moderateScale(22),
                        marginLeft: moderateScale(22)
                    }}>
                        <Image source={require('../../assets/back/back.png')} />
                    </TouchableOpacity>

                    <View style={{
                        marginTop: moderateScale(22), width: scale(296)
                        , marginHorizontal: moderateScale(32)
                    }}>
                        <Text style={{
                            fontSize: moderateScale(24), fontWeight: 'bold',
                            textAlign: 'center', lineHeight: moderateScale(32)
                        }}>CHOOSE YOUR</Text>
                        <Text style={{
                            fontSize: moderateScale(24), fontWeight: 'bold',
                            textAlign: 'center', lineHeight: moderateScale(32)
                        }}>ACCOUNT TYPE</Text>
                    </View>


                    <TouchableOpacity style={{ marginTop: moderateScale(30), alignSelf: 'center'
                    ,height:moderateScale(128),width:moderateScale(128),
                    justifyContent:'center' }}
                        onPress={flag => this.setState({ flag: 'signup' })}

                    >
                        <Image source={this.state.flag == 'signup' ?
                            require('../../assets/salon_selected/salon_selected.png') :
                            require('../../assets/salon_icon/salon_icon.png')}
                            style={{alignSelf:'center'}}
                        />

                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', marginTop: moderateScale(32) }}>

                        <Text style={{
                            textAlign: 'center', fontSize: moderateScale(20),
                            lineHeight: moderateScale(24)
                        }}>SIGNUP</Text>
                    </View>
                    <TouchableOpacity style={{ marginTop: moderateScale(34), alignSelf: 'center' 
                    ,height:moderateScale(128),width:moderateScale(128),justifyContent:'center' }}
                        onPress={flag => this.setState({ flag: 'login' })}>
                        <Image source={this.state.flag == 'login' ?
                            require('../../assets/freelancer_selected/freelancer_selected.png'):
                            require('../../assets/freelancer_icon/freelancer_icon.png')}
                            style={{alignSelf:'center'}}
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', marginTop: moderateScale(32) }}>
                        <Text style={{
                            textAlign: 'center', fontSize: moderateScale(20),
                            lineHeight: moderateScale(24)
                        }}>LOGIN</Text>
                    </View>

                    <TouchableOpacity style={{
                        height: moderateScale(48), justifyContent: 'center', borderRadius: moderateScale(4),
                        backgroundColor: '#89D6CE',
                        marginHorizontal: moderateScale(24), marginTop: moderateScale(42),marginBottom:moderateScale(32)
                    }}
                        onPress={this.proceed}>
                        <Text style={{
                            fontWeight: 'bold', fontSize: moderateScale(12),letterSpacing:moderateScale(2),
                            textAlign: 'center', color: '#FFFFFF', lineHeight: moderateScale(16)
                        }}>
                            CONTINUE
                            </Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        );
    }
}