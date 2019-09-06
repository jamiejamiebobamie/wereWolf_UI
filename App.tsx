import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Constants from 'expo-constants';
// import WButton from './src/WButton.tsx'


export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {hi:"hello"}
    }


    // wButton(props){
    //     return (
    //         <Button
    //           title={props.text}
    //           onPress={props.callBack}
    //           // style={props.size}
    //         />
    //     )
    // }

render(){
    return (
      <View style={{flex:1}}>
        <Text>Open up App.tsx to start working on your app!</Text>
        // <WButton text='hello1' size='big1'/>
        // <WButton text='hello2' size='big2'/>
        // <WButton text='hello3' size='medium'/>
        // <WButton text='hello3' size='small'/>
        // <Button/>
      </View>
    );
}

}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//
//
// //button styles
//   big1: {
//       color: 'red'
//   },
//
//   big2: {
//       color: 'blue'
//   },
//
//   medium: {
//       color: 'grey',
//   },
//
//   small: {
//       color: 'red'
//
//   },
//
//   burgerMenu: {
//       color: 'white'
//   },
//
// });
