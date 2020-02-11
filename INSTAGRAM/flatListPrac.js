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
    FlatList
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

const flatListPrac: () => React$Node = () => {

    const Data = [
        {
            name: 'Honey',
            like: '100',
            comment: '500',
            imag: "/Users/interns/Desktop/MyProject/superMan.jpg"
        },
        {
            name: 'Badka Ji',
            like: '100',
            comment: '500',
            imag: "/Users/interns/Desktop/MyProject/superMan.jpg"
        },
        {
            name: 'Mohit',
            like: '100',
            comment: '500',
            imag: "/Users/interns/Desktop/MyProject/superMan.jpg"
        },
        {
            name: 'Honey',
            like: '100',
            comment: '500',
            imag: "/Users/interns/Desktop/MyProject/superMan.jpg"
        },
        {
            name: 'Badka Ji',
            like: '100',
            comment: '500',
            imag: "/Users/interns/Desktop/MyProject/superMan.jpg"
        },
        {
            name: 'Badka Ji',
            like: '100',
            comment: '500',
            imag: "/Users/interns/Desktop/MyProject/superMan.jpg"
        },
        {
            name: 'Mohit',
            like: '100',
            comment: '500',
            imag: "/Users/interns/Desktop/MyProject/superMan.jpg"
        },
        {
            name: 'Honey',
            like: '100',
            comment: '500',
            imag: "/Users/interns/Desktop/MyProject/superMan.jpg"
        },
        {
            name: 'Badka Ji',
            like: '100',
            comment: '500',
            imag: "/Users/interns/Desktop/MyProject/superMan.jpg"
        }

    ];

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    horizontal
                    keyExtractor={(item) => item.name}
                    data={Data}
                    renderItem={({ item }) =>
                        <View style={{
                            backgroundColor: '#b3ffe6',
                            margin: moderateScale(10)
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={{ uri: item.imag }} style={{ height: 50, width: 50 }} />
                                <Text style={{ fontSize: moderateScale(18), alignSelf: 'center' }}>{item.name}</Text>
                            </View>
                            <Text style={{ fontSize: moderateScale(18) }}>Likes : {item.like}</Text>
                            <Text style={{ fontSize: moderateScale(18) }}>Comment : {item.comment}</Text>
                        </View>
                    } />
            </View>

        </SafeAreaView>
    ); 
};

export default flatListPrac;
