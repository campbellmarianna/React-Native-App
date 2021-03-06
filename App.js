// learn_components.js
import React, { Component } from 'react';
import { Text, View, AppRegistry, Image, StyleSheet, TextInput, Alert, Button,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
    TouchableWithoutFeedback, Platform, ScrollView, FlatList, SectionList, ActivityIndicator} from 'react-native';

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
//  }

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
// export default class AlignItemsBasics extends Component {
//     render() {
//         return (
//             // Try setting `alignItems` to 'flex-start'
//             // Try setting `justifyContent` to `flex-end`.
//             // Try setting `flexDirection` to `row`.
//             <View style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'stretch',
//             }}>
//                 <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
//                 <View style={{height: 100, backgroundColor: 'skyblue'}} />
//                 <View style={{height: 200, backgroundColor: 'steelblue'}} />
//             </View>
//         );
//     }
// };

// handling_text_input - translate input text into pizza slices
// export default class PizzaTranslator extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {text: ''};
//     }
//
//     render() {
//         return (
//             <View style={{padding: 10}}>
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Type here to translate!"
//                     onChangeText={(text) => this.setState({text})}
//                 />
//                 <Text style={{padding: 10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//             </View>
//         );
//     }
// }

// handling_touches.js
// <Button
//     onPress={() => {
//         Alert.alert('You tapped the button!');
//     }}
//     title="Press Me"
// />
//
// // Button Basics
// export default class ButtonBasics extends Component {
//     _onPressButton() {
//         Alert.alert('You tapped the button!')
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.buttonContainer}>
//                     <Button
//                     onPress={this._onPressButton}
//                     title="Press Me"
//                     />
//                 </View>
//                 <View style={styles.buttonContainer}>
//                     <Button
//                         onPress={this._onPressButton}
//                         title="Press Me"
//                         color="#841584"
//                     />
//                 </View>
//                 <View style={styles.alternativeLayoutButtonContainer}>
//                     <Button
//                         onPress={this._onPressButton}
//                         title="This looks great!"
//                     />
//                     <Button
//                         onPress={this._onPressButton}
//                         title="OK!"
//                         color="#841584"
//                     />
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1, // - fill all available space
//         justifyContent: 'center',
//     },
//     buttonContainer: {
//         margin: 20
//     },
//     alternativeLayoutButtonContainer: {
//         margin: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     }
// });

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);

// Touchables
// export default class Touchables extends Component {
//     _onPressButton() {
//         Alert.alert('You tapped the button!')
//     }
//
//     _onLongPressButton() {
//         Alert.alert('You long-pressed the button!')
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableHighlight</Text>
//                     </View>
//                 </TouchableHighlight>
//                 <TouchableOpacity onPress={this._onPressButton}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableOpacity</Text>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableNativeFeedback onPress={this._onPressButton} background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//                     </View>
//                 </TouchableNativeFeedback>
//                 <TouchableWithoutFeedback onPress={this._onPressButton}>
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//                     </View>
//                 </TouchableWithoutFeedback>
//                 <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
//                 underlayColor="white">
//                     <View style={styles.button}>
//                         <Text style={styles.buttonText}>Touchable with Long Press</Text>
//                     </View>
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 60,
//         alignItems: 'center'
//     },
//     button: {
//         marginBottom: 30,
//         width: 260,
//         alignItems: 'center',
//         backgroundColor: '#2196F3'
//     },
//     buttonText: {
//         padding: 20,
//         color: 'white'
//     }
// })

// learn_scrollview.js
// ScrollView - a scroll container holding multiple components and props
// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//     render() {
//         return (
//             <ScrollView>
//                 <Text style={{fontSize: 96}}>Scroll me plz</Text>
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Text style={{fontSize: 96}}>If you like</Text>
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Text style={{fontSize:96}}>Scrolling down</Text>
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Text style={{fontSize:96}}>What's the best</Text>
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Text style={{fontSize: 96}}>Framework around?</Text>
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//                 <Text style={{fontSize:80}}>React Native</Text>
//             </ScrollView>
//         )
//     }
// }

// FlatList Basics
// export default class FlatListBasics extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <FlatList
//                     data={[
//                         {key:'Devin'},
//                         {key: 'Jackson'},
//                         {key: 'James'},
//                         {key: 'Joel'},
//                         {key: 'John'},
//                         {key: 'Jillian'},
//                         {key: 'Jimmy'},
//                         {key: 'Julie'}
//                     ]}
//                     renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//                 />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
// })

// Section List
// export default class SectionListBasics extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <SectionList
//                     sections={[
//                         {title: 'D', data:['Devin']},
//                         {title: 'J',data: ['Jackson', 'James', 'Joel', 'John',
//                         'Jillian', 'Jimmy', 'Julie']},
//                     ]}
//                     renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//                     renderSectionHeader={({section}) => <Text style= {styles.sectionHeader}>
//                     {section.title}</Text>}
//                     keyExtractor={(item, index) => index}
//                 />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22
//     },
//     sectionHeader: {
//         paddingTop:2,
//         paddingLeft: 10,
//         paddingRight: 10,
//         paddingBottom: 2,
//         fontSize: 14,
//         fontWeight: 'bold',
//         backgroundColor: 'rgba(247, 247, 247, 1.0)',
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
// })

export default class FetchExample extends React.Component {

    constructor(props){
        super(props);
        this.state={ isLoading: true}
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function(){

                });
            })
            .catch((error) =>{
                console.log(error);
            });
    }

    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        );
    }
}
