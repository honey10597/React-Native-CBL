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

import ViewMoreText from 'react-native-view-more-text';

const DATA = [
    {
        imag: 'https://m.economictimes.com/thumb/msid-74320021,width-1200,height-900,resizemode-4,imgsize-103393/virat-kohli-pti.jpg',
        name: 'Virat Kohli',
        time: '2 min',
        post: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/01/18/Pictures/india-vs-australia_ef2d71f2-39ae-11ea-a49c-dfdc60e78d98.jpg',
        like: '12 likes',
        comment: '43 comments',
        description: "Virat Kohli is an Indian cricketer who currently captains the India national team. A right-handed top-order batsman, Kohli is regarded as one of the best batsmen in the world. He plays for Royal Challengers Bangalore in the Indian Premier League, and has been the team's captain since 2013"
    },
    {
        imag: 'https://starsunfolded.com/wp-content/uploads/2015/01/Shikhar-Dhawan-8.jpg',
        name: 'shikhar Dhawan',
        time: '2 min',
        post: 'https://images1.livehindustan.com/uploadimage/library/2020/01/24/16_9/16_9_1/shikhar_dhawan_photo_instagram__1579877375.jpg',
        like: '12 likes',
        comment: '43 comments',
        description: "Shikhar Dhawan is an Indian international cricketer. A left-handed opening batsman and an occasional right-arm off break bowler, he plays for Delhi in domestic cricket and Delhi Capitals in the IPL. He played for the Indian Under-17 and Under-19 teams before making his first-class debut for Delhi in November 2004."
    },
    {
        imag: 'https://m.economictimes.com/thumb/msid-74320021,width-1200,height-900,resizemode-4,imgsize-103393/virat-kohli-pti.jpg',
        name: 'Virat Kohli',
        time: '2 min',
        post: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/01/18/Pictures/india-vs-australia_ef2d71f2-39ae-11ea-a49c-dfdc60e78d98.jpg',
        like: '12 likes',
        comment: '43 comments',
        description: "Virat Kohli is an Indian cricketer who currently captains the India national team. A right-handed top-order batsman, Kohli is regarded as one of the best batsmen in the world. He plays for Royal Challengers Bangalore in the Indian Premier League, and has been the team's captain since 2013"
    },
    {
        imag: 'https://starsunfolded.com/wp-content/uploads/2015/01/Shikhar-Dhawan-8.jpg',
        name: 'shikhar Dhawan',
        time: '2 min',
        post: 'https://images1.livehindustan.com/uploadimage/library/2020/01/24/16_9/16_9_1/shikhar_dhawan_photo_instagram__1579877375.jpg',
        like: '12 likes',
        comment: '43 comments',
        description: "Shikhar Dhawan is an Indian international cricketer. A left-handed opening batsman and an occasional right-arm off break bowler, he plays for Delhi in domestic cricket and Delhi Capitals in the IPL. He played for the Indian Under-17 and Under-19 teams before making his first-class debut for Delhi in November 2004."
    }
]



export default class Home extends React.Component {

    renderViewMore(onPress) {
        return (
            <Text onPress={onPress} style={{ color: '#E0115F' }}>more</Text>
        )
    }
    renderViewLess(onPress) {
        return (
            <Text onPress={onPress} style={{ color: '#E0115F' }}>View less</Text>
        )
    }


    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


                <View style={{
                    flexDirection: 'row',
                    height: moderateScale(58),
                    justifyContent: 'space-between',
                    shadowColor: 'grey',
                    elevation:3,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    backgroundColor: 'white',
                    borderRadius: moderateScale(4),
                }}
                >
                    <TouchableOpacity>
                        <Image source={require('../../assets/photo-camera/photo-camera.png')}
                            style={{ marginHorizontal: moderateScale(16), marginTop: moderateScale(20) }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/notification/notification.png')}
                            style={{ marginHorizontal: moderateScale(16), marginTop: moderateScale(20) }} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{
                        marginTop: moderateScale(16), height: moderateScale(40), flexDirection: 'row', borderRadius: moderateScale(4),marginHorizontal: moderateScale(16), borderWidth: moderateScale(1), borderColor: 'rgba(0,0,0,0.06)'
                    }}>
                        <Image source={require('../../assets/ic_search/ic_search.png')}
                            style={{ marginLeft: moderateScale(12), alignSelf: 'center' }} />
                        <TextInput style={{
                            marginTop: moderateScale(0), fontSize: moderateScale(14),
                            lineHeight: moderateScale(24), width: moderateScale(290),justifyContent:'center'
                        }}
                            placeholder="Search"

                        />
                    </View>

                    <View style={{
                        marginTop: moderateScale(16), marginHorizontal: moderateScale(16),
                    }}>

                        <FlatList
                            data={DATA}
                            renderItem={({ item }) =>
                                <View style={{
                                    marginBottom: moderateScale(16), justifyContent: 'center',
                                    shadowColor: 'grey',
                                    shadowOffset: { width: 0, height: moderateScale(10) },
                                    shadowOpacity: 0.2,
                                    shadowRadius: moderateScale(4),
                                    elevation:3,

                                    backgroundColor: 'white'
                                }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ marginTop: moderateScale(16), marginHorizontal: moderateScale(16), flexDirection: 'row' }}>
                                            <Image source={{ uri: item.imag }} style={{ height: scale(40), width: scale(40), borderRadius: moderateScale(50 / 2) }}
                                            />
                                            <View style={{ justifyContent: 'center', marginLeft: moderateScale(10) }}>
                                                <Text style={{ fontSize: moderateScale(14), lineHeight: moderateScale(18), fontFamily: 'Helvetica Bold' }}>{item.name}</Text>
                                                <Text style={{ fontSize: moderateScale(12), lineHeight: moderateScale(14), opacity: 0.5 }}>{item.time}</Text>
                                            </View>

                                        </View>
                                        <TouchableOpacity style={{ marginTop: moderateScale(34), marginRight: moderateScale(24), justifyContent: 'center' }}>
                                            <Image source={require('../../assets/ic_add/ic_add.png')}
                                                style={{ alignSelf: 'flex-end' }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: moderateScale(12) }}>
                                        <Image source={{ uri: item.post }}
                                            style={{ width: '100%', height: 144 }}
                                        />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                            <View style={{ flexDirection: 'row', marginLeft: moderateScale(16), marginTop: moderateScale(8) }}>
                                                <Text style={{ fontSize: moderateScale(12), lineHeight: moderateScale(16), fontFamily: 'Helvetica' }}>{item.like}</Text>
                                                <Text> {item.comment}</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', position: 'relative', bottom: moderateScale(20) }}>
                                                <TouchableOpacity style={{
                                                    height: scale(40), width: scale(40), borderRadius: moderateScale(50 / 2), justifyContent: 'center',
                                                    shadowColor: 'grey',
                                                    shadowOffset: { width: 0, height: 10 },
                                                    shadowOpacity: 0.1,
                                                    elevation:3,
                                                    shadowRadius: 2,
                                                    backgroundColor: 'white'
                                                }} onPress={this.openProfile = async () => {
                                                    // const items = [['fname', item.name], ['floc', item.location]]
                                                    try {
                                                        await AsyncStorage.setItem('FIRST_NAME', item.name)
                                                        await AsyncStorage.setItem('POST', item.post)
                                                        await AsyncStorage.setItem('DESCRIPTION', item.description)
                                                        await AsyncStorage.setItem('TIME', item.time)
                                                        await AsyncStorage.setItem('LIKES', item.like)
                                                        await AsyncStorage.setItem('COMMENTS', item.comment)
                                                    } catch (e) {
                                                        //   console.warn("ooo bhai maarooo");
                                                        // error message
                                                    }
                                                    (this.props.navigation.navigate('OPEN_PROFILE'))
                                                }}>

                                                    <Image source={require('../../assets/share/share.png')}
                                                        style={{ alignSelf: 'center' }} />
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    height: scale(40), width: scale(40), borderRadius: moderateScale(50 / 2), justifyContent: 'center', marginLeft: moderateScale(8),
                                                    shadowColor: 'grey',
                                                    shadowOffset: { width: 0, height: 10 },
                                                    shadowOpacity: 0.1,
                                                    shadowRadius: 2,
                                                    elevation:3,
                                                    backgroundColor: 'white'
                                                }}>
                                                    <Image source={require('../../assets/comment/comment.png')}
                                                        style={{ alignSelf: 'center' }} />
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    height: scale(40), width: scale(40), borderRadius: moderateScale(50 / 2), justifyContent: 'center', marginLeft: moderateScale(8),
                                                    shadowColor: 'grey',
                                                    shadowOffset: { width: 0, height: 10 },
                                                    shadowOpacity: 0.1,
                                                    shadowRadius: 2,
                                                    elevation:3,
                                                    backgroundColor: 'white',
                                                    marginRight: moderateScale(16)
                                                }}>
                                                    <Image source={require('../../assets/like/like.png')}
                                                        style={{ alignSelf: 'center' }} />
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            borderBottomColor: 'rgba(0,0,0,0.08)',
                                            borderBottomWidth: 1,
                                        }}
                                    />
                                    <View style={{ marginTop: moderateScale(16), marginLeft: moderateScale(16) }}>
                                        <Text style={{ fontSize: moderateScale(16), lineHeight: moderateScale(16), fontFamily: 'Helvetica Bold' }}>Color Highlights</Text>
                                    </View>
                                    <View style={{ marginLeft: moderateScale(16), marginRight: moderateScale(10), flexDirection: 'row', marginBottom: moderateScale(12) }}>
                                        <ViewMoreText
                                            numberOfLines={2}
                                            renderViewMore={this.renderViewMore}
                                            renderViewLess={this.renderViewLess}
                                            textStyle={{ textAlign: 'left' }}
                                            style={{ flexDirection: 'row' }}
                                        >
                                            <Text style={{ fontSize: moderateScale(12), lineHeight: moderateScale(16), color: 'rgba(0,0,0,0.5)' }}>{item.description}</Text>
                                        </ViewMoreText>
                                    </View>

                                </View>
                            }
                        />

                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }
}