import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello This is Awesome App.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4d4f',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

// import React, { Component } from 'react';
// import { AppRegistry, Text } from 'react-native';
//
// export default class HelloWorldApp extends Component {
//     render() {
//         return (
//             <Text>Hello world!</Text>
//         );
//     }
// }

// The ReactJS code can also be imported into another component with the following:

// import HelloWorldApp from './HelloWorldApp'
