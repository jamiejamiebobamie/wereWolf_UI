import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }

// onPress={this._onPressButton}
// onLongPress={this._onLongPressButton}

  render() {
    return (
      <View style={styles.container}>

            <Text style={styles.titleText} >Werewolf</Text>

        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.bigBlueButton}>
            <Text style={styles.buttonTextBig}>Create</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.bigRedButton}>
            <Text style={styles.buttonTextBig}>Cancel</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.interiorContainerGraySelect}>

            <Text style={styles.interiorContainerText}>Username</Text>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.mediumGrayButton}>
                <Text style={styles.buttonText}>Vote</Text>
              </View>
            </TouchableHighlight>

        </View>

        <View style={styles.interiorContainerGraySelect}>

            <Text style={styles.interiorContainerText}>Username</Text>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.mediumGrayButton}>
                <Text style={styles.buttonText}>Vote</Text>
              </View>
            </TouchableHighlight>

        </View>

        <View style={styles.interiorContainerWhiteSelect}>

            <Text style={styles.interiorContainerText}>Username</Text>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.smallRedButton}>
                <Text style={styles.buttonText}>Kick</Text>
              </View>
            </TouchableHighlight>

        </View>

        <View style={styles.interiorContainerWhiteSelect}>

            <Text style={styles.interiorContainerText}>Username</Text>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.smallRedButton}>
                <Text style={styles.buttonText}>Kick</Text>
              </View>
            </TouchableHighlight>

        </View>

        <View style={styles.interiorContainerGrayViewBorder}>

            <Text style={styles.titleTextInterior}>You Died</Text>

        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  titleText: {
      textAlign: 'center',
      padding: 50,
      color: 'black',
      // marginBottom: 30,
      fontSize: 50,
  },

  titleTextInterior: {
      textAlign: 'center',
      padding: 20,
      color: 'black',
      // marginBottom: 30,
      fontSize: 40,
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

  interiorContainerGrayViewBorder: {
    backgroundColor: 'rgb(221,221,221)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    width: 260,
    // padding:,
    marginBottom: 30,
    borderRadius: 10,
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
