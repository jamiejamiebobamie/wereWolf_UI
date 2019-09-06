import React from 'react';
import { StyleSheet, Button} from 'react-native';
// import './src/WButton.css'

function wButton(props){
    return (
        <Button
          title={props.text}
          onPress={props.callBack}
          style={props.size}
        />
    )
}

const styles = StyleSheet.create({
  big1: {
      color: 'red'
  },

  big2: {
      color: 'blue'
  },

  medium: {
      color: 'grey',
  },

  small: {
      color: 'red'

  },

  burgerMenu: {
  },
});

export default WButton
