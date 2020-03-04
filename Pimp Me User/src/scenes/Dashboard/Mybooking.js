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

export default class Mybookings extends React.Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
            <View style={{height:moderateScale(56),backgroundColor:'rgb(224,17,95)',justifyContent:'center'}}>
                <Text style={{textAlign:'center',fontSize:moderateScale(24),color:'white'}}>MyBookings</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{textAlignVertical: "center",fontSize:moderateScale(20)}}>Coming Soon...!</Text>
            </View>
        </SafeAreaView>
        );
    }
}