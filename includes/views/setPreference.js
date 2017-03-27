import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
} from 'react-native';

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
      <View>
        <Text>Welcome to Carp! What's your email and where you at?</Text>
        <TextInput
          onChangeText={this.onChangeEmail.bind(this)}
          required={true}
          placeholder="Enter your email here"
          >
          </TextInput>
        <TextInput
          onChangeText={this.onChangeCity.bind(this)}
          required={true}
          placeholder="What city are you in?"
          >
          </TextInput>
        <TouchableHighlight
          onPress={this.onSubmitPressed.bind(this)}
          >
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
