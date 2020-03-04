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
                <View style={{ height: moderateScale(56), backgroundColor: 'rgb(224,17,95)', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: moderateScale(24), color: 'white' }}>Home</Text>
                </View>
                <ScrollView>

                    <View style={{ height: moderateScale(56), backgroundColor: 'rgb(224,17,95)', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: moderateScale(24), color: 'white' }}>Welcome {this.state.value}</Text>
                    </View>

                    <FlatList
                        data={Data}
                        renderItem={({ item }) =>

                            <TouchableOpacity style={{}} onPress={this.edit = async () => {
                                // const items = [['fname', item.name], ['floc', item.location]]
                                try {
                                    await AsyncStorage.setItem('fname', item.name)
                                    await AsyncStorage.setItem('floc', item.location)
                                    await AsyncStorage.setItem('imggg', item.img)

                                } catch (e) {
                                    //   console.warn("ooo bhai maarsooo");
                                    // error message
                                }
                                (this.props.navigation.navigate('detail'))
                            }}>

                                <View style={{ flexDirection: 'row', borderBottomWidth: moderateScale(1) }}>
                                    <View style={{ flexDirection: "row", marginVertical: moderateScale(8) }}>
                                        <Image source={{ uri: item.img }} style={{ height: scale(80), marginHorizontal: moderateScale(16), width: scale(80), borderRadius: moderateScale(150 / 2) }} />
                                    </View>
                                    <View style={{ justifyContent: 'center', marginHorizontal: moderateScale(8) }}>

                                        <Text style={{ fontSize: moderateScale(14) }}>
                                            {item.name}
                                        </Text>

                                        <Text style={{ fontSize: moderateScale(14) }}>
                                            {item.location}
                                        </Text>
                                    </View>
                                </View>
                                {fullname => this.setState(item.name)}
                            </TouchableOpacity>

                        }
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
