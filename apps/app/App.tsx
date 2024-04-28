/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {WebViewTest} from './src/screens/WebViewTest';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'blue', height: 100, width: 100}}>
        <Text>asdfsadf</Text>
      </View>
      <WebViewTest />
    </SafeAreaView>
  );
}

export default App;
