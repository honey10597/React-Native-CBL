/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      mobileNo:''
    }
  }


  Check = () => {

    if (this.state.name == '') {
      alert('Enter name');
    } else if (this.state.mobileNo == '') {
      alert('Enter Moile Number');
    }else if (this.state.email == '') {
      alert('Enter email');
    } else if (this.state.password == '') {
      alert('Enter Password');
    } else {
      alert('Name: ' + this.state.name + "\n" + 'Email: ' + this.state.email + "\n" + 'Password: ' + this.state.password);
    }

  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
        <ImageBackground source={require('./background.jpg')}
          style={{ width: '100%', height: '100%' }}>
          <View >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              {/* <Image source={require('./voot_icon.png')}
          style={{width:scale(50),height:verticalScale(50),left:0}}
          /> */}
              <Text style={{ fontSize: moderateScale(30), fontStyle: 'italic', alignSelf: 'center' }}>Sign Up</Text>
            </View>

            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                top: moderateScale(5)
              }}
            >
            </View>

            <View style={{ padding: moderateScale(10), flexDirection: 'column' }}>
              <View>
                <Image source={require('./voot_icon.png')}
                  style={{ width: scale(80), height: scale(80), alignSelf: 'center' }}
                />
              </View>

              <View style={{ marginTop: moderateScale(50), flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text>Already have Account ?</Text>
                <TouchableOpacity style={{ marginBottom: moderateScale(10) }}
                >
                  <Text style={{
                    fontSize: moderateScale(15), color: '#801a00', textAlign: 'center'
                  }}>Log In</Text>
                </TouchableOpacity>
              </View>

              <View style={{}}>

                <View style={{ padding: moderateScale(10) }}>
                  <Text style={{ marginTop: moderateScale(10), marginLeft: moderateScale(35), fontSize: moderateScale(20) }}>Name</Text>
                  <TextInput style={{
                    margin: 'auto', borderBottomWidth: 2, borderColor: 'black', height: verticalScale(30)
                    , width: scale(250), alignSelf: 'center'
                  }}
                    placeholder="Enter Name"
                    placeholderTextColor="#9a73ef"
                    onChangeText={name => this.setState({ name })}
                  />
                </View>
                <View style={{ padding: moderateScale(10) }}>
                  <Text style={{ marginLeft: moderateScale(35), fontSize: moderateScale(20) }}>Mobile No.</Text>
                  <TextInput style={{
                    margin: 'auto', borderBottomWidth: 2, borderColor: 'black', height: verticalScale(30)
                    , width: scale(250), alignSelf: 'center'
                  }}
                    placeholder="Enter Mobile Number"
                    placeholderTextColor="#9a73ef"
                    onChangeText={mobileNo => this.setState({ mobileNo })}
                  />
                </View>
                <View style={{ padding: moderateScale(10) }}>
                  <Text style={{ marginLeft: moderateScale(35), fontSize: moderateScale(20) }}>Email</Text>
                  <TextInput style={{
                    margin: 'auto', borderBottomWidth: 2, borderColor: 'black', height: verticalScale(30)
                    , width: scale(250), alignSelf: 'center'
                  }}
                    placeholder="Enter Email"
                    placeholderTextColor="#9a73ef"
                    keyboardType="email-address"
                    onChangeText={email => this.setState({ email })}
                  />
                </View>
                <View style={{ padding: moderateScale(10) }}>
                  <Text style={{ marginLeft: moderateScale(35), fontSize: moderateScale(20) }}>Password</Text>
                  <TextInput style={{
                    margin: 'auto', borderBottomWidth: 2, borderColor: 'black', height: verticalScale(30)
                    , width: scale(250), alignSelf: 'center'
                  }}
                    placeholder="Enter Password"
                    placeholderTextColor="#9a73ef"
                    secureTextEntry="true"
                    onChangeText={password => this.setState({ password })}
                  />
                </View>
                <TouchableOpacity style={{
                  borderRadius: moderateScale(15 / 2),
                  width: '70%', alignSelf: 'center', marginBottom: moderateScale(10), backgroundColor: '#990000'
                }}
                  onPress={this.Check}>
                  <Text style={{
                    fontSize: moderateScale(15), color: 'white', padding: moderateScale(7),
                    textAlign: 'center'
                  }}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  borderRadius: moderateScale(15 / 2),
                  width: '70%', backgroundColor: '#0055ff', flexDirection: 'row',marginTop: moderateScale(10), alignSelf: 'center', marginBottom: moderateScale(10)
                }} >
                  <Image source={require('./facebook_icon.png')}
                    style={{ height: scale(10), width: scale(20), padding: moderateScale(20) }} />
                  <Text style={{
                    fontSize: moderateScale(15), color: 'white', padding: moderateScale(7),
                    borderRadius: moderateScale(5),alignSelf: 'center',textAlign:'auto'
                  }}>Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  borderRadius: moderateScale(15 / 2),
                  width: '70%', backgroundColor: 'white', flexDirection: 'row',marginTop: moderateScale(10), alignSelf: 'center', marginBottom: moderateScale(10)
                }} >
                  <Image source={require('./google_icon.png')}
                    style={{ height: scale(20), width: verticalScale(20), padding: moderateScale(20) }} />
                  <Text style={{
                    fontSize: moderateScale(15), color: 'black', padding: moderateScale(7),
                    borderRadius: moderateScale(5),alignSelf: 'center',textAlign:'auto'
                  }}>Continue with Google</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={{ fontSize: moderateScale(15), color: '#000000', fontWeight: 'bold' }}>I Agree to </Text>
                <TouchableOpacity style={{}}  >
                  <Text style={{ fontSize: moderateScale(15), color: '#801a00', fontWeight: 'bold' }}>terms & conditions </Text>
                </TouchableOpacity>

                <Text style={{ fontSize: moderateScale(15), color: '#000000', fontWeight: 'bold' }}>and </Text>

                <TouchableOpacity style={{}}  >
                  <Text style={{ fontSize: moderateScale(15), color: '#801a00', fontWeight: 'bold' }}> privacy policy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

