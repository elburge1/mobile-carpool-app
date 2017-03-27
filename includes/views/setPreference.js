import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  input: {
    height: 50,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class SetPrefs extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      email: '',
      city: '',
    }
  }
  onChangeEmail(text) {
    this.state.email = text;
    this.setState(this.state)
  }

  onChangeCity(text) {
    this.state.city = text;
    this.setState(this.state)
  }

  onSubmitPressed() {
    console.log(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Carp! What's your email and where you at?</Text>
        <TextInput
          onChangeText={this.onChangeEmail.bind(this)}
          required={true}
          placeholder="Enter your email here"
          style={styles.input}
          >
          </TextInput>
        <TextInput
          onChangeText={this.onChangeCity.bind(this)}
          required={true}
          placeholder="What city are you in?"
          style={styles.input}
          >
          </TextInput>
        <TouchableHighlight
          onPress={this.onSubmitPressed.bind(this)}
          style={styles.button}
          >
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default SetPrefs;
