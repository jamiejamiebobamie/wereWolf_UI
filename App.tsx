import React, { Component } from 'react';
import { Platform,
        StyleSheet,
        Text,
        TouchableHighlight,
        TouchableOpacity,
        TouchableNativeFeedback,
        TouchableWithoutFeedback,
        View,
        Image,
        ScrollView,
        TextInput,
        Button,
        InputAccessoryView, } from 'react-native';

export default class Touchables extends Component {
  constructor(props) {
      super(props);
      this.state = {text: 'Placeholder Text'};
  }

  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }

// onPress={this._onPressButton}
// onLongPress={this._onLongPressButton}

//on a white background, use TouchableHighlight
//on a background other than white, use TouchableOpacity
// or set underlayColor property...

            // <Text style={styles.titleText} >Werewolf</Text>
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.bigBlueButton}>
//     <Text style={styles.buttonTextBig}>Create</Text>
//   </View>
// </TouchableHighlight>
//
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.bigRedButton}>
//     <Text style={styles.buttonTextBig}>Cancel</Text>
//   </View>
// </TouchableHighlight>
//
// <View style={styles.interiorContainerGraySelect}>
//
//     <Text style={styles.interiorContainerText}>Username</Text>
//
//     <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
//       <View style={styles.mediumGrayButton}>
//         <Text style={styles.buttonText}>Vote</Text>
//       </View>
//     </TouchableOpacity>
//
// </View>
//
// <View style={styles.interiorContainerGraySelect}>
//
//     <Text style={styles.interiorContainerText}>Username</Text>
//
//     <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
//       <View style={styles.mediumGrayButton}>
//         <Text style={styles.buttonText}>Vote</Text>
//       </View>
//     </TouchableOpacity>
//
// </View>
//
// <View style={styles.interiorContainerWhiteSelect}>
//
//     <Text style={styles.interiorContainerText}>Username</Text>
//
//     <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//       <View style={styles.smallRedButton}>
//         <Text style={styles.buttonText}>Kick</Text>
//       </View>
//     </TouchableHighlight>
//
// </View>
//
// <View style={styles.interiorContainerWhiteSelect}>
//
//     <Text style={styles.interiorContainerText}>Username</Text>
//
//     <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//       <View style={styles.smallRedButton}>
//         <Text style={styles.buttonText}>Kick</Text>
//       </View>
//     </TouchableHighlight>
//
// </View>
//
// <View style={styles.interiorContainerGrayViewBorder}>
//
//     <Text style={styles.titleTextInterior}>You Died</Text>
//
// </View>

// <View style={styles.icon}>
//   <Image
//     style={{width: 200, height: 200}}
//     source={require('./public/img/test_img_icon.png')}
//   />
// </View>
// <View style={styles.interiorContainerGrayViewBorderRadius}>
//
//     <Text style={styles.titleTextInterior}>You Died</Text>
//
// </View>



  render() {
      const inputAccessoryViewID = "uniqueID";

    return (
      <View style={styles.container}>

            <ScrollView keyboardDismissMode="interactive">
              <TextInput
                style={{
                  padding: 10,
                  paddingTop: 50,
                }}
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={text => this.setState({text})}
                value={this.state.text}
              />
            </ScrollView>
            <InputAccessoryView nativeID={inputAccessoryViewID}>
              <Button
                onPress={() => this.setState({text: 'Placeholder Text'})}
                title="Reset Text"
              />
            </InputAccessoryView>

      </View>
    );
  }
}

// hamburgerMenu, input fields

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },

  titleText: {
      textAlign: 'center',
      padding: 30,
      color: 'black',
      // marginBottom: 30,
      fontSize: 50,
      marginBottom: 15,
      marginBottom: 15,
  },

  titleTextInterior: {
      textAlign: 'center',
      padding: 20,
      color: 'black',
      // marginBottom: 30,
      fontSize: 50,
  },

  interiorContainerGraySelect: {
    backgroundColor: 'rgb(221,221,221)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: 260,
    padding:10,
    marginBottom: 10,
  },


  interiorContainerWhiteSelect: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: 260,
    padding: 10,
    // paddingLeft:10,
    // paddingRight:10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,

  },

  interiorContainerGrayView: {
    backgroundColor: 'rgb(221,221,221)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    width: 260,
    padding:10,
    marginBottom: 30,
  },

  interiorContainerGrayViewBorderRadius: {
    backgroundColor: 'rgb(221,221,221)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    width: 260,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    padding: 10,
  },

  interiorContainerText: {
    textAlign: 'center',
    color: 'rgb(136,136,136)',
},



  bigBlueButton: {
    marginBottom: 20,
    width: 260,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  bigRedButton: {
    marginBottom: 20,
    width: 260,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'red',
  },

  mediumGrayButton: {
    width: 70,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgb(196,196,196)',
  },

  smallRedButton: {
      width: 70,
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: 'red',
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 1,
      // borderThickness:
  },

  buttonTextBig: {
    textAlign: 'center',
    padding: 15,
    color: 'black',
    fontSize: 40,
},

  buttonText: {
    textAlign: 'center',
    padding: 5,
    color: 'black'
},

icon: {
    padding: 10,
    marginBottom: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
}
});

// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Button} from 'react-native';
// import Constants from 'expo-constants';
// // import WButton from './src/WButton.tsx'
//
//
// export default class App extends Component {
//
//     constructor(props){
//         super(props)
//         this.state = {hi:"hello"}
//     }
//
//
//     // wButton(props){
//     //     return (
//     //         <Button
//     //           title={props.text}
//     //           onPress={props.callBack}
//     //           // style={props.size}
//     //         />
//     //     )
//     // }
//
//
//
// render(){
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.tsx to start working on your app!</Text>
//         <Button title='hello1' style={{color: 'red',width: '100%',flex:1, backgroundColor: 'red',}}/>
//         <Button title='hello2' style={styles.big2}/>
//         <Button title='hello3' style={styles.medium}/>
//         <Button title='hello3' style={styles.small}/>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="Press Me"
//           />
//       </View>
//     </View>
//     );
// }
//
// }
// //
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//
//
// //button styles
//   big1: {
//       color: 'red',
//       width: '100%',
//       flex:1,
//
//       backgroundColor: 'red',
//   },
//
//   big2: {
//       color: 'blue',
//       width: '100%',
//       flex:1,
//
//       backgroundColor: 'blue',
//   },
//
//   medium: {
//       color: 'grey',
//       width: '100%',
//       flex:1,
//
//       backgroundColor: 'grey',
//   },
//
//   small: {
//       color: 'red',
//       width: '100%',
//       flex:1,
//
//       backgroundColor: 'red',
//
//   },
//
//   burgerMenu: {
//       color: 'white',
//
//       backgroundColor: 'white',
//   },
//   buttonContainer: {
//   margin: 20
// },
//
// });
