// learn_components.js
import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';

// // Using ES6
// // Anything you see on the screen is some sort of component
// // defining HelloWorld App as a new Component
// export default class HelloWorldApp extends Component {
//     // returns some JSX to render
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <Text>Hello, world!</Text>
//             </View>
//         );
//     }
// }

// learn_props.js
// a component with a creation of parameters is a prop
// In example below source is a prop
// ...
// import { AppRegistry, Image } from 'react-native';

// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => Bananas);

// ...

// class Greeting extends Component {
//     render() {
//         return (
//             <View style={{alignItems: 'center'}}>
//                 <Text>Hello {this.props.name}!</Text>
//             </View>
//         );
//     }
// }
//
// export default class LotsOfGreetings extends Component {
//     render() {
//         return (
//             <View style={{alignItems: 'center', top: 50}}>
//                 <Greeting name='Rexxar' />
//                 <Greeting name='Jaina' />
//                 <Greeting name='Valeera' />
//             </View>
//         );
//     }
// }

// learn_state.js
class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true},

        // Toggle the state every second
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))

        ), 1000);
    }

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
        );
    }
}

// The text is a prop
export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever tak this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}
