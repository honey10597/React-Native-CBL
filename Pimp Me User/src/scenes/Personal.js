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

import AsyncStorage from '@react-native-community/async-storage';

export default class Personal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            post: '',
            descrip: '',
            time: '',
            like: '',
            comment: ''
        }
    }

    componentDidMount = async () => {
        try {
            const value = await AsyncStorage.getItem('FIRST_NAME')
            const valueTwo = await AsyncStorage.getItem('POST')
            const valueThree = await AsyncStorage.getItem('DESCRIPTION')
            const valueFour = await AsyncStorage.getItem('TIME')
            const valueFive = await AsyncStorage.getItem('LIKES')
            const valueSix = await AsyncStorage.getItem('COMMENTS')
            // alert(valueTwo)
            this.setState(
                {
                    name: value,
                    post: valueTwo,
                    descrip: valueThree,
                    time: valueFour,
                    like: valueFive,
                    comment: valueSix
                }
            )
            // alert(value)
        } catch (e) {
            // error reading value
            // AsyncStorage.removeItem('value')
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <ImageBackground source={{ uri: this.state.post }}
                        style={{ height: moderateScale(224), width: '100%' }}>
                        <TouchableOpacity style={{ position: 'absolute', marginTop: moderateScale(16) }} onPress={() => this.props.navigation.goBack()} >
                            <Image source={require('../assets/back_circle/back_circle.png')} />
                        </TouchableOpacity>
                        <View style={{ marginTop: moderateScale(172), marginHorizontal: moderateScale(16), flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={{ uri: this.state.post }}
                                    style={{ height: scale(40), width: scale(40), borderRadius: moderateScale(50 / 2) }} />
                                <View style={{ marginLeft: moderateScale(8), justifyContent: 'center' }}>
                                    <Text style={{ fontSize: moderateScale(14), lineHeight: moderateScale(20), color: '#FFFFFF', textAlign: 'center' }}>
                                        {this.state.name}
                                    </Text>
                                    <Text style={{ fontSize: moderateScale(12), lineHeight: moderateScale(16), color: '#FFFFFF', opacity: 0.8 }}>{this.state.time}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{ justifyContent: 'flex-end' }}>
                                <Image source={require('../assets/360_ico/360_ico.png')} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: moderateScale(16) }} >
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: moderateScale(14) }}>
                            <Text style={{ fontSize: moderateScale(12), lineHeight: moderateScale(16), fontFamily: 'Helvetica', textAlign: 'center' }}>{this.state.like}</Text>
                            <Text style={{ fontSize: moderateScale(12), lineHeight: moderateScale(16), fontFamily: 'Helvetica' }}> {this.state.comment}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{
                                height: scale(40), width: scale(40), justifyContent: 'center'
                            }}>
                                <Image source={require('../assets/share/share.png')}
                                    style={{ alignSelf: 'center' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: scale(40), width: scale(40), justifyContent: 'center'

                            }}>
                                <Image source={require('../assets/comment/comment.png')}
                                    style={{ alignSelf: 'center' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: scale(40), width: scale(40), justifyContent: 'center'
                            }}>
                                <Image source={require('../assets/like/like.png')}
                                    style={{ alignSelf: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: moderateScale(1),
                            opacity: 0.2,
                            marginHorizontal: moderateScale(16)
                        }}
                    />
                    <View style={{ marginHorizontal: moderateScale(16), marginTop: moderateScale(22), justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: moderateScale(24), lineHeight: moderateScale(24), textAlign: 'left', textAlignVertical: 'center' }}>
                            Color Highlights
                        </Text>
                    </View>
                    <View style={{ marginLeft: moderateScale(16), marginTop: moderateScale(18), marginRight: moderateScale(24), justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: moderateScale(14), lineHeight: moderateScale(20), opacity: 0.5 }}>{this.state.descrip}</Text>
                    </View>
                    <Text style={{ fontSize: moderateScale(14), lineHeight: moderateScale(20), opacity: 0.3, marginTop: moderateScale(26), marginLeft: moderateScale(16) }}>ARTIST</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: moderateScale(16), marginTop: moderateScale(30) }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ marginHorizontal: moderateScale(16) }}>
                                <Image source={{ uri: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU0OTM2NTg1NzQz/tom-cruise-9262645-1-402.jpg' }}
                                    style={{ width: scale(58), height: scale(58), borderRadius: moderateScale(60 / 2) }}
                                />
                            </View>
                            <View style={{}}>
                                <Text style={{ fontSize: moderateScale(18), lineHeight: moderateScale(24) }}>Tom Cruze</Text>
                                <View style={{ flexDirection: 'row', backgroundColor: 'black', width: moderateScale(40), justifyContent: 'center', borderRadius: moderateScale(50 / 2) }}>
                                    <Image source={require('../assets/star_yellow/star_yellow.png')}
                                        style={{ marginTop: moderateScale(4) }} />
                                    <Text style={{ fontSize: moderateScale(10), color: 'white' }}> 4.5</Text>
                                </View>
                            </View></View>
                        <View >
                            <Text style={{ color: '#E0115F', fontSize: moderateScale(14), lineHeight: moderateScale(24), textAlign: 'center' }}>Contact</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: moderateScale(24), marginHorizontal: moderateScale(16), flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fde7f0' }}>
                        <TouchableOpacity style={{ marginLeft: moderateScale(16), justifyContent: 'center', height: moderateScale(48) }}>
                            <Text style={{ color: '#E0115F', textAlign: 'center', alignSelf: 'center' }}>BLOCK THIS USER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Image source={require('../assets/arrow_right/next_arrow.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}