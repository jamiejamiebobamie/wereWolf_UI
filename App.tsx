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
      this.state = {text: 'Title'};
  }

  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }

// **********
// 'View title component'
// titleText
// <Text style={styles.titleText} >Werewolf</Text>

// **********
// 'Start, Back, Host Game, Join Game button component'
// bigBlueButton
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.bigBlueButton}>
//     <Text style={styles.buttonTextBig}>Create</Text>
//   </View>
// </TouchableHighlight>

// **********
// 'Cancel button component'
// bigRedButton
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.bigRedButton}>
//     <Text style={styles.buttonTextBig}>Cancel</Text>
//   </View>
// </TouchableHighlight>

// **********
// 'Join game and vote player component'
// interiorContainerGraySelect + interiorContainerText + mediumGrayButton
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

// **********
// 'Kick player element'
// interiorContainerWhiteSelect + interiorContainerText + smallRedButton
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

// **********
// 'Display icon / image element'
// icon
// <View style={styles.icon}>
//   <Image
//     style={{width: 200, height: 200}}
//     source={require('./public/img/test_img_icon.png')}
//   />
// </View>

// **********
// 'You died component'
// interiorContainerGrayView
// <View style={styles.interiorContainerGrayView}>
//
//     <Text style={styles.titleTextInterior}>You Died</Text>
//
// </View>

// **********
// Title, Max Players, Desried Roles component
// inputBox
// <TextInput
//   style={styles.inputBox}
//   onChangeText={text => this.setState({text})}
//   value={this.state.text}
// />

// ??????????
// Extra stuff related to the 'inputBox' element:
// const inputAccessoryViewID = "uniqueID";
//                 inputAccessoryViewID={inputAccessoryViewID}
// <ScrollView keyboardDismissMode="interactive">
//   <TextInput
//     style={styles.inputBox}
//     inputAccessoryViewID={inputAccessoryViewID}
//     onChangeText={text => this.setState({text})}
//     value={this.state.text}
//   />
// </ScrollView>
// <InputAccessoryView nativeID={inputAccessoryViewID} style={{backgroundColor: 'blue',}}>
//   <Button
//     onPress={() => this.setState({text: 'Placeholder Text'})}
//     title="Reset Text"
//     style={{backgroundColor: 'pink',}}
//   />
// </InputAccessoryView>



// TO-DO :: hamburgerMenu, differently-sized-font inputBoxes
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

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
    fontSize: 50,
    marginBottom: 15,
    marginBottom: 15,
  },

  titleTextInterior: {
    textAlign: 'center',
    padding: 20,
    color: 'black',
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
},

inputBox: {
    padding: 20,
    marginTop: 30,
    marginBottom: 30,
    width: 260,
    backgroundColor: 'rgb(221,221,221)',
    color: 'rgb(136,136,136)',
    fontSize: 40,
    textAlign: 'center'
},

});
