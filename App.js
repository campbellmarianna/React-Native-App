import React, { Component } from 'react';
import { Text, View } from 'react-native';

// // Using ES6
// // Anything you see on the screen is some sort of component
// // defining HelloWorld App as a new Component
export default class HelloWorldApp extends Component {
    // returns some JSX to render
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, world!</Text>
            </View>
        );
    }
}
