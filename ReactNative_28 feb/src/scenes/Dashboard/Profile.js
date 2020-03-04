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

export default class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'Albert Einstein',
            email:'albert@gmail.com'
        }
    }

    ed=()=>{
        (this.props.navigation.navigate('editprofile'))
    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
            <View style={{height:moderateScale(56),backgroundColor:'rgb(224,17,95)',justifyContent:'center'}}>
                <Text style={{textAlign:'center',fontSize:moderateScale(24),color:'white'}}>Profile</Text>
            </View>
            <Image source={{uri:'https://cdn.dribbble.com/users/2927199/screenshots/5698774/albert-einstein.jpg'}} 
                    style={{height:'50%',width:'100%'}}
                />
            <View style={{marginHorizontal:moderateScale(16),alignItems:'center'}}>
                <View style={{flexDirection:'row',marginTop:moderateScale(24),alignItems:'center'}}>
                    <Text style={{fontSize:moderateScale(16),fontWeight:'bold'}}>Name : </Text>
                    <Text style={{fontSize:moderateScale(14),fontWeight:'normal'}}>{this.state.name}</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:moderateScale(24),alignItems:'center'}}>
                    <Text style={{fontSize:moderateScale(16),fontWeight:'bold'}}>Email : </Text>
                    <Text style={{fontSize:moderateScale(14),fontWeight:'normal'}}>{this.state.email}</Text>
                </View>
                <TouchableOpacity style={{width:'50%',height:moderateScale(48),backgroundColor:'rgb(224,17,95)',
                marginTop:moderateScale(24),justifyContent:'center',alignItems:'center',
                borderRadius:moderateScale(10/2)}}  onPress={this.ed}>
                    <Text style={{color:'white',fontSize:moderateScale(14)}}>EDIT</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
        );
    }
}