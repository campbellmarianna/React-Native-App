// learn_components.js
import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, StyleSheet } from 'react-native';

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
// class Blink extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { isShowingText: true},
//
//         // Toggle the state every second
//         setInterval(() => (
//             this.setState(previousState => (
//                 { isShowingText: !previousState.isShowingText }
//             ))
//
//         ), 1000);
//     }
//
//     render() {
//         if (!this.state.isShowingText) {
//             return null;
//         }
//
//         return (
//             <Text>{this.props.text}</Text>
//         );
//     }
// }
//
// // The text is a prop
// export default class BlinkApp extends Component {
//     render() {
//         return (
//             <View>
//                 <Blink text='I love to blink' />
//                 <Blink text='Yes blinking is so great' />
//                 <Blink text='Why did they ever tak this out of HTML' />
//                 <Blink text='Look at me look at me look at me' />
//             </View>
//         );
//     }
// }

// learn_style.js
// Style is a prop
// all core components accept the prop Style
// const styles = StyleSheet.create({
//     bigBlue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30,
//     },
//     red: {
//         color: 'red',
//     },
// });
//
// export default class LotsOfStyles extends Component {
//     render() {
//         return (
//             <View>
//                 <Text style={styles.red}>just red</Text>
//                 <Text style={styles.bigBlue}>just bigBlue</Text>
//                 <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
//                 <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
//             </View>
//         );
//     }
// }

// learn height_and_width
// It is common to set dimensions this way because it should be the same size
// no matter the screen dimensions

// Fixed Dimensions
// export default class FixedDimensionsBasics extends Component {
//     render() {
//         return (
//             <View>
//                 <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}} />
//                 <View style={{width: 200, height: 200, backgroundColor: 'skyblue'}} />
//                 <View style={{width: 250, height: 250, backgroundColor: 'steelblue'}} />
//             </View>
//         )
//     }
// }

// Flex Dimensions
// flex expands or shrinks based on available space
// flex: 1 - fill all available space
// export default class FlexDimensionsBasics extends Component {
//     render() {
//         return (
//             // Try removing the `flex: 1` on the parent View.
//             // The parent will not have dimensions, so the children can't expand.
//             // What if you add `height: 300` instead of `flex: 1`?
//             <View style={{flex: 1}}>
//                 <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//                 <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//                 <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//             </View>
//         );
//     }
// }


//learn_layout_with_flexbox.js
// flexDirection - default is column instead od row
// export default class FlexDirectionBasics extends Component {
//     render() {
//         return (
//             // Try setting `flexDirection` to `column`.
//             <View style={{flex: 1, flexDirection: 'row'}}>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//                 <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//                 <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//             </View>
//         );
//     }
// };

// justify content - determines where the children are positioned on the primary axis
// export default class JustifyContentBasics extends Component {
//     render() {
//         return (
//             // Try setting `justifyContent` to `center`.
//             // Try setting `flexDirection` to `row`.
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//             }}>
//                 <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//                 <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//                 <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//             </View>
//         );
//     }
// };

// align items - aligns the children along the secondary axis
export default class AlignItemsBasics extends Component {
    render() {
        return (
            // Try setting `alignItems` to 'flex-start'
            // Try setting `justifyContent` to `flex-end`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{height: 50, backgroundColor: 'skyblue'}} />
                <View style={{height: 100, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};
