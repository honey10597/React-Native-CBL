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

import ImagePicker from 'react-native-image-crop-picker';

export default class Editprofile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imagePath: '',
            name: '',
            email: '',
        };
    }

    emailCheck = (email) => {
        const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validation.test(email);
    }


    Check=()=>{
        const{name,email}=this.state;
        if(name!='')
        {
            if(email!='')
            {
                if (this.emailCheck(email))
                {
                    alert('Profile Updated');
                }else{
                    alert('Invalid email');
                }
            }else{
                alert('Enter Email');
            }

        }else{
            alert('Enter Name');
        }
    }


    static navigationOptions = {
        header: null
    }

        _imagePicker = () => {
        if (Platform.OS === 'android') {
          //ask permissions first
          this._imagePickerCode()
        }
        else {
          this._imagePickerCode()
        }
    }
   
    _imagePickerCode = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            this.setState({ imagePath: image.path })
        });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
               <View style={{ height: moderateScale(56), backgroundColor: 'rgb(224,17,95)', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                        <Image source={require("../../assets/back_circle/back_circle.png")} style ={{marginTop: moderateScale(8)}}/>
                    </TouchableOpacity>

                    <Text style={{fontSize: moderateScale(24), color: 'white'}}>EDIT PROFILE</Text>

                    <View><Text>                  </Text></View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: moderateScale(24), alignItems: 'center' }}>
                    <View style={{
                        marginLeft: moderateScale(24), height: scale(80), width: scale(80),
                        borderRadius: moderateScale(100 / 2), borderColor: 'black', borderWidth: moderateScale(1)
                    }}>
                        {
                            <Image resizeMode={'cover'} style={{ height: '100%', width: '100%', borderRadius: moderateScale(100 / 2) }} source={{ uri: this.state.imagePath }} />
                        }
                    </View>
                    <TouchableOpacity style={{
                        width: '30%', height: moderateScale(38), justifyContent: 'center'
                        , marginLeft: moderateScale(16), backgroundColor: 'rgb(224,17,95)', borderRadius: moderateScale(5)
                    }}
                        onPress={() => this._imagePicker()}
                    >
                        <Text style={{ textAlign: 'center', fontSize: moderateScale(14), color: 'white' }}>Change</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ marginHorizontal: moderateScale(24), marginTop: moderateScale(24) }}>
                    <Text style={{ fontSize: moderateScale(20) }}>Name</Text>
                    <TextInput style={{
                        borderBottomWidth: moderateScale(1), marginTop: moderateScale(6),
                        borderColor: 'black', fontSize: moderateScale(16)
                    }}
                        placeholder="Enter name"
                        placeholderTextColor="#9a73ef"
                        onChangeText={name => this.setState({ name })}
                    />
                </View>
                <View style={{ marginHorizontal: moderateScale(24), marginTop: moderateScale(10) }}>
                    <Text style={{ fontSize: moderateScale(20) }}>Email</Text>
                    <TextInput style={{
                        borderBottomWidth: moderateScale(1), marginTop: moderateScale(6),
                        borderColor: 'black', fontSize: moderateScale(16)
                    }}
                        placeholder="Enter Email"
                        placeholderTextColor="#9a73ef"
                        keyboardType="email-address"
                        onChangeText={email => this.setState({ email })}
                    />
                </View>
                <TouchableOpacity style={{
                    width: '50%', height: moderateScale(48), backgroundColor: 'rgb(224,17,95)',
                    marginTop: moderateScale(24), justifyContent: 'center', alignSelf: 'center',
                    borderRadius: moderateScale(10 / 2)
                }} onPress={this.Check} 
                >
                    <Text style={{ color: 'white', fontSize: moderateScale(14),textAlign:'center'}}>SAVE</Text>
                </TouchableOpacity>

            </SafeAreaView>
        );
    }
}