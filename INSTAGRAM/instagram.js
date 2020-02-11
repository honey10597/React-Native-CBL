/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {
    scale,
    verticalScale,
    moderateScale
} from 'react-native-size-matters';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import flatListPrac from './flatListPrac';

const story = [
    {
        name: 'Virat kohli',
        imag: "/Users/interns/Desktop/MyProject/viratKohli.jpg",
        like: "/Users/interns/Desktop/MyProject/like_icon.png",
        comment: "/Users/interns/Desktop/MyProject/comment_icon.png",
        share: "/Users/interns/Desktop/MyProject/msg_icon.png",
        save: "/Users/interns/Desktop/MyProject/save_icon.png",
        dot: "/Users/interns/Desktop/MyProject/dots.png",
        totalLikes: "452",
        totalComment: "365"
    },
    {
        name: 'KL Rahul',
        imag: "/Users/interns/Desktop/MyProject/klrahul.jpg",
        like: "/Users/interns/Desktop/MyProject/like_icon.png",
        comment: "/Users/interns/Desktop/MyProject/comment_icon.png",
        share: "/Users/interns/Desktop/MyProject/msg_icon.png",
        save: "/Users/interns/Desktop/MyProject/save_icon.png",
        dot: "/Users/interns/Desktop/MyProject/dots.png",
        totalLikes: "452",
        totalComment: "365"
    },
    {
        name: 'Maahi',
        imag: "/Users/interns/Desktop/MyProject/dhoni.png",
        like: "/Users/interns/Desktop/MyProject/like_icon.png",
        comment: "/Users/interns/Desktop/MyProject/comment_icon.png",
        share: "/Users/interns/Desktop/MyProject/msg_icon.png",
        save: "/Users/interns/Desktop/MyProject/save_icon.png",
        dot: "/Users/interns/Desktop/MyProject/dots.png",
        totalLikes: "452",
        totalComment: "365"
    },
    {
        name: 'Air_Canada',
        imag: "/Users/interns/Desktop/MyProject/aircanada.jpg",
        like: "/Users/interns/Desktop/MyProject/like_icon.png",
        comment: "/Users/interns/Desktop/MyProject/comment_icon.png",
        share: "/Users/interns/Desktop/MyProject/msg_icon.png",
        save: "/Users/interns/Desktop/MyProject/save_icon.png",
        dot: "/Users/interns/Desktop/MyProject/dots.png",
        totalLikes: "452",
        totalComment: "365"
    },
    {
        name: 'Nature',
        imag: "/Users/interns/Desktop/MyProject/nature.jpg",
        like: "/Users/interns/Desktop/MyProject/like_icon.png",
        comment: "/Users/interns/Desktop/MyProject/comment_icon.png",
        share: "/Users/interns/Desktop/MyProject/msg_icon.png",
        save: "/Users/interns/Desktop/MyProject/save_icon.png",
        dot: "/Users/interns/Desktop/MyProject/dots.png",
        totalLikes: "452",
        totalComment: "365"
    },
    {
        name: 'Indian_Army',
        imag: "/Users/interns/Desktop/MyProject/indianarmy.jpg",
        like: "/Users/interns/Desktop/MyProject/like_icon.png",
        comment: "/Users/interns/Desktop/MyProject/comment_icon.png",
        share: "/Users/interns/Desktop/MyProject/msg_icon.png",
        save: "/Users/interns/Desktop/MyProject/save_icon.png",
        dot: "/Users/interns/Desktop/MyProject/dots.png",
        totalLikes: "452",
        totalComment: "365"
    },
    {
        name: 'Boeing_747',
        imag: "/Users/interns/Desktop/MyProject/boeing.jpg",
        like: "/Users/interns/Desktop/MyProject/like_icon.png",
        comment: "/Users/interns/Desktop/MyProject/comment_icon.png",
        share: "/Users/interns/Desktop/MyProject/msg_icon.png",
        save: "/Users/interns/Desktop/MyProject/save_icon.png",
        dot: "/Users/interns/Desktop/MyProject/dots.png",
        totalLikes: "452",
        totalComment: "365"
    },
    {
        name: 'Cockpit',
        imag: "//Users/interns/Desktop/MyProject/cockpit.jpg",
        like: "/Users/interns/Desktop/MyProject/like_icon.png",
        comment: "/Users/interns/Desktop/MyProject/comment_icon.png",
        share: "/Users/interns/Desktop/MyProject/msg_icon.png",
        save: "/Users/interns/Desktop/MyProject/save_icon.png",
        dot: "/Users/interns/Desktop/MyProject/dots.png",
        totalLikes: "452",
        totalComment: "365"
    }
];



export default class instagram extends React.Component {
    
    constructor(){
        super();
        this.state={
            count:0
        };
    }
    incCount=()=>{
        this.setState({ count: this.state.count+1 })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={require('./cam_icon.png')}
                            style={{ height: moderateScale(45), width: scale(45) }}
                        />
                        <Text style={{ fontSize: moderateScale(30),fontFamily: 'Baskerville-Italic', fontWeight: 'bold', top: moderateScale(5) }}>Instagram</Text>
                        <Image source={require('./msg_icon.png')}
                            style={{ height: moderateScale(45), width: scale(45) }}
                        />
                    </View>
                </View>

                <View
                    style={{
                        borderBottomColor: '#f2f2f2',
                        borderWidth: moderateScale(0.4),
                    }}
                ></View>
                <ScrollView vertical={true}>

                    <FlatList
                        horizontal
                        data={story}
                        renderItem={({ item }) =>
                            <View style={{ margin: moderateScale(10) }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Image source={{ uri: item.imag }} style={{ height: scale(50), width: scale(50), borderRadius: scale(50 / 2) }} />
                                    <Text style={{ fontSize: moderateScale(10), alignSelf: 'center' }}>{item.name}</Text>
                                </View>
                            </View>
                        } />
                    <View
                        style={{
                            top: moderateScale(5), height: scale(13),
                            borderBottomColor: '#f2f2f2',
                            borderWidth: moderateScale(0.5),
                        }}
                    ></View>

                    <View>
                        <FlatList
                            data={story}
                            renderItem={({ item }) =>
                                <View style={{ position: 'relative' }}>
                                    <View style={{ flexDirection: 'row', margin: moderateScale(10) }}>
                                        <Image source={{ uri: item.imag }}
                                            style={{ height: scale(43), width: moderateScale(45), borderRadius: moderateScale(45 / 2) }} />
                                        <Text style={{ fontSize: moderateScale(15), alignSelf: 'center' }}>{item.name}</Text>
                                        <Image source={{ uri: item.dot }}
                                            style={{
                                                height: verticalScale(25), width: scale(17), alignSelf: 'center', position: 'absolute', right: moderateScale(10)
                                            }} />
                                    </View>
                                    <Image source={{ uri: item.imag }} style={{ height: verticalScale(300), width: '100%' }} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: moderateScale(3), margin: moderateScale(3) }}>
                                        <TouchableOpacity onPress={this.incCount}>
                                            <Image source={{ uri: item.like }} style={{ height: verticalScale(33), width: scale(33) }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={{ uri: item.comment }} style={{ height: verticalScale(33), width: scale(33) }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={{ uri: item.share }} style={{ height: verticalScale(33), width: scale(33) }} />
                                        </TouchableOpacity>

                                        <Image source={{ uri: item.save }} style={{
                                            height: verticalScale(33), width: scale(33),
                                            position: 'absolute', right: moderateScale(0), alignSelf: 'center'
                                        }} />

                                    </View>
                                    <View style={{ padding: moderateScale(5) }}>
                                        <Text style={{ fontWeight: "bold" }}>{this.state.count} Likes</Text>
                                        <Text>View all {item.totalComment} comments</Text>
                                        <View style={{ flexDirection: 'row', margin: 'auto' }}>
                                            <Image source={{ uri: item.imag }}
                                                style={{ height: verticalScale(43), width: scale(45), borderRadius: moderateScale(45 / 2) }} />
                                            <TextInput style={{ left: moderateScale(10) }}
                                                placeholder="Add a comment" />
                                        </View>
                                        <View
                                            style={{
                                                top: moderateScale(5), height: moderateScale(1),
                                                borderBottomColor: '#f2f2f2',
                                                borderWidth: moderateScale(0.5),
                                            }}
                                        ></View>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                </ScrollView>
                <View><View style={{flexDirection: 'row',justifyContent: 'space-between', position: 'relative', bottom: 0, 
                margin: moderateScale(3),backgroundColor: 'white', width: '100%',alignItems:'center'}}>
                    <Image source={require('./home_icon.png')} style={{height: scale(40), width: scale(40)}} />
                    <Image source={require('./search_icon.png')} style={{ height: scale(40), width: scale(40)}} />
                    <Image source={require('./plus_icon.png')} style={{ height: scale(40), width: scale(40)}} />
                    <Image source={require('./like_icon.png')} style={{ height: scale(40), width: scale(40)}} />
                    <Image source={require('./user_icon.png')} style={{ height: scale(40), width: scale(40)}} />
                </View></View>


            </SafeAreaView>
        );
    }
}