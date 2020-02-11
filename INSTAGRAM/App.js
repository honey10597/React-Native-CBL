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

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <View >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={require('./cam_icon.png')}
            style={{ height: 50, width: 50 }}
          />
          <Text style={{ fontSize: 30, fontStyle: 'italic', fontWeight: 'bold', top: 5 }}>Instagram</Text>
          <Image source={require('./msg_icon.png')}
            style={{ height: 50, width: 50 }}
          />
        </View>
        </View>

      <View
        style={{
          borderBottomColor: '#f2f2f2',
          borderWidth: 0.4,
        }}
      ></View>
      <ScrollView vertical={true}>

        <ScrollView horizontal={true}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 0, left: 5, margin: 10, height: 83 }}>
            <View >
              <Image source={require('./thanos.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Thanos</Text>
            </View>
            <View >
              <Image source={require('./story_imag.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Alone</Text>
            </View>
            <View >
              <Image source={require('./superMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Superman</Text>
            </View>
            <View >
              <Image source={require('./ironMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>IronMan</Text>
            </View>
            <View >
              <Image source={require('./batMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Batman</Text>
            </View>
            <View >
              <Image source={require('./story_imag.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Alone</Text>
            </View>
            <View >
              <Image source={require('./superMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Superman</Text>
            </View>
            <View >
              <Image source={require('./ironMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>IronMan</Text>
            </View>
            <View >
              <Image source={require('./batMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Batman</Text>
            </View>
            <View >
              <Image source={require('./story_imag.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Alone</Text>
            </View>
            <View >
              <Image source={require('./superMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Superman</Text>
            </View>
            <View >
              <Image source={require('./ironMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>IronMan</Text>
            </View>
            <View >
              <Image source={require('./batMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Batman</Text>
            </View>
            <View >
              <Image source={require('./story_imag.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Alone</Text>
            </View>
            <View >
              <Image source={require('./superMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Superman</Text>
            </View>
            <View >
              <Image source={require('./ironMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>IronMan</Text>
            </View>
            <View >
              <Image source={require('./batMan.jpg')}
                style={{ height: 65, width: 65, borderRadius: 65 / 2, margin: 5 }}
              />
              <Text style={{ fontSize: 15, textAlign: 'center' }}>Batman</Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            top: 13, height: 13,
            borderBottomColor: '#f2f2f2',
            borderWidth: 0.5,
          }}
        ></View>
        <View style={{ left: 10, top: 10, flexDirection: 'row' }}>

          <Image source={require('./ironMan.jpg')}
            style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
          />
          <Text style={{ fontSize: 15, top: 15, left: 10 }}>IronMan</Text>

          <Image source={require('./dots.png')}
            style={{ height: 30, width: 30, position: 'absolute', right: 10, top: '18%' }}
          />

        </View>

        <View
          style={{
            top: 13, height: 13,
            borderBottomColor: '#f2f2f2',
            borderWidth: 0.5,
          }}
        ></View>

        <Image source={require('./superMan.jpg')}
          style={{ top: 10, height: 500, width: '100%' }}
        />

        <View style={{ left: 10, top: 10, flexDirection: 'row' }}>

          <Image source={require('./ironMan.jpg')}
            style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
          />
          <Text style={{ fontSize: 15, top: 15, left: 10 }}>IronMan</Text>

          <Image source={require('./dots.png')}
            style={{ height: 30, width: 30, position: 'absolute', right: 10, top: '18%' }}
          />

        </View>

        <View
          style={{
            top: 13, height: 13,
            borderBottomColor: '#f2f2f2',
            borderWidth: 0.5,
          }}
        ></View>

        <Image source={require('./iron.jpg')}
          style={{ top: 10, height: 500, width: '100%' }}
        />
        <View style={{ left: 10, top: 10, flexDirection: 'row' }}>

          <Image source={require('./ironMan.jpg')}
            style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
          />
          <Text style={{ fontSize: 15, top: 15, left: 10 }}>IronMan</Text>

          <Image source={require('./dots.png')}
            style={{ height: 30, width: 30, position: 'absolute', right: 10, top: '18%' }}
          />

        </View>

        <View
          style={{
            top: 13, height: 13,
            borderBottomColor: '#f2f2f2',
            borderWidth: 0.5,
          }}
        ></View>

        <Image source={require('./thanos.jpg')}
          style={{ top: 10, height: 500, width: '100%' }}
        />

        <View style={{ left: 10, top: 10, flexDirection: 'row' }}>

          <Image source={require('./ironMan.jpg')}
            style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
          />
          <Text style={{ fontSize: 15, top: 15, left: 10 }}>IronMan</Text>

          <Image source={require('./dots.png')}
            style={{ height: 30, width: 30, position: 'absolute', right: 10, top: '18%' }}
          />

        </View>

        <View
          style={{
            top: 13, height: 13,
            borderBottomColor: '#f2f2f2',
            borderWidth: 0.5,
          }}
        ></View>

        <Image source={require('./superMan.jpg')}
          style={{ top: 10, height: 500, width: '100%' }}
        />

        <View style={{ left: 10, top: 10, flexDirection: 'row' }}>

          <Image source={require('./ironMan.jpg')}
            style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
          />
          <Text style={{ fontSize: 15, top: 15, left: 10 }}>IronMan</Text>

          <Image source={require('./dots.png')}
            style={{ height: 30, width: 30, position: 'absolute', right: 10, top: '18%' }}
          />

        </View>

        <View
          style={{
            top: 13, height: 13,
            borderBottomColor: '#f2f2f2',
            borderWidth: 0.5,
          }}
        ></View>

        <Image source={require('./batMan.jpg')}
          style={{ top: 10, height: 500, width: '100%' }}
        />
        <View style={{ left: 10, top: 10, flexDirection: 'row' }}>

          <Image source={require('./ironMan.jpg')}
            style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
          />
          <Text style={{ fontSize: 15, top: 15, left: 10 }}>IronMan</Text>

          <Image source={require('./dots.png')}
            style={{ height: 30, width: 30, position: 'absolute', right: 10, top: '18%' }}
          />

        </View>

        <View
          style={{
            top: 13, height: 13,
            borderBottomColor: '#f2f2f2',
            borderWidth: 0.5,
          }}
        ></View>

        <Image source={require('./iron.jpg')}
          style={{ top: 10, height: 500, width: '100%' }}
        />
        <View style={{ left: 10, top: 10, flexDirection: 'row' }}>

          <Image source={require('./ironMan.jpg')}
            style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
          />
          <Text style={{ fontSize: 15, top: 15, left: 10 }}>IronMan</Text>

          <Image source={require('./dots.png')}
            style={{ height: 30, width: 30, position: 'absolute', right: 10, top: '18%' }}
          />

        </View>

        <View
          style={{
            top: 13, height: 13,
            borderBottomColor: '#f2f2f2',
            borderWidth: 0.5,
          }}
        ></View>

        <Image source={require('./thanos.jpg')}
          style={{ top: 10, height: 500, width: '100%' }}
        />
      </ScrollView>

      <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', position: 'absolute', top: '95%', backgroundColor: 'white', width: '100%' }}>
        <Image source={require('./home_icon.png')} style={{ height: 70, width: 70 }} />
        <Image source={require('./search_icon.png')} style={{ height: 70, width: 70 }} />
        <Image source={require('./plus_icon.png')} style={{ height: 70, width: 70 }} />
        <Image source={require('./like_icon.png')} style={{ height: 70, width: 70 }} />
        <Image source={require('./user_icon.png')} style={{ height: 70, width: 70 }} />
      </View>
    </SafeAreaView>
  );
};

export default App;
