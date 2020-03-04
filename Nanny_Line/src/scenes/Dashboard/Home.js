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
    FlatList
} from 'react-native';

import {
    scale,
    verticalScale,
    moderateScale
} from 'react-native-size-matters';

import AsyncStorage from '@react-native-community/async-storage';

const Data = [
    {
        img: 'https://cdn.dribbble.com/users/2927199/screenshots/5698774/albert-einstein.jpg',
        name: 'Albert Einstein',
        location: 'New Jersey,United States'
    },
    {
        img: 'https://media.newstracklive.com/uploads/sports-news/cricket-news/Oct/28/big_thumb/sachin-tendulkar-1_5db68c870e347.jpg',
        name: 'Sachin Tendulkar',
        location: 'Mumbai'
    },
    {
        img: 'https://c.ndtvimg.com/2019-12/ll1j7b8g_ms-dhoni-afp_625x300_24_December_19.jpg',
        name: 'MS Dhoni',
        location: 'Ranchi,Jharkhand'
    },
    {
        img: 'https://img.etimg.com/thumb/msid-71917504,width-643,imgsize-623426,resizemode-4/untitled-3.jpg',
        name: 'Virat Kohli',
        location: 'New Delhi'
    },
    {
        img: 'https://english.cdn.zeenews.com/sites/default/files/2018/01/25/656220-harbhajan-970-ipl.jpg',
        name: 'Harbhajan Singh Bhajji',
        location: 'Amritsar,Punjab'
    },
    {
        img: 'https://imagevars.gulfnews.com/2019/07/08/India-s-Rohit-Sharma_16bd2488d22_large.jpg',
        name: 'Rohit Sharma',
        location: 'Mumbai'
    }

]

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    componentDidMount = async () => {
        const { value } = this.state;

        try {
            const val = await AsyncStorage.getItem('name')
            this.setState(
                {
                    value: val,

                }
            );

        } catch (e) {
            // error reading value
        }
        AsyncStorage.removeItem('name')
    }

    render() {
        const { fullname } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between'
                        , marginTop: moderateScale(18), marginHorizontal: moderateScale(20),marginBottom:moderateScale(14)
                    }}>
                        <View style={{ justifyContent: 'center', marginLeft: moderateScale(110) }}>
                            <Text style={{
                                fontSize: moderateScale(20), lineHeight: moderateScale(24),
                                color: '#89D6CE', fontFamily: 'Helvetica Bold', textAlign: 'center'
                            }}>NANNY LINE</Text>
                        </View>

                        <Image source={require('../../assets/back/back.png')}
                            style={{ alignItems: 'flex-end', alignSelf: 'center', }}
                        />

                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between',
                                    marginHorizontal:moderateScale(16),marginTop:moderateScale(16)}}>
                        <View style={{backgroundColor:'pink'}}></View>
                        <View style={{backgroundColor:'lightgreen'}}></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
