import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Vibration } from 'react-native';

export default class App extends React.Component {

  handlePress() {
    Alert.alert(
      'Awww!',
      'Don\'t press so hard',
      [
        {text: 'OK, I won\'t', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    );
    Vibration.vibrate(PATTERN);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>My First App</Text>
        <TouchableOpacity
          onPress={this.handlePress}
          style={styles.button}
        >
          <Text style={styles.textColor}> Touch Me </Text>
        </TouchableOpacity>
        <Text>© Copyright {(new Date().getFullYear())} Pravin Banjade</Text>
      </View>
    );
  }
}

const PATTERN = [0,100,250,125,900,100,250,125];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    margin: 10,
  },
  textColor: {
    color: '#fff'
  },
  image: {
    height: 110,
    width: 193,
    marginBottom: 10,
  }
});
