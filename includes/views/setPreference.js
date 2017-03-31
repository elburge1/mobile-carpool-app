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
    backgroundColor: '#05A5D1',
  },
  title: {
    fontSize: 24,
    margin: 10,
    alignSelf: 'center',
  },
  subtitle: {
    alignSelf: 'center',
    fontSize: 16,
    textDecorationLine: 'underline',
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
    backgroundColor: 'yellow',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
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
        <Text style={styles.title}>Welcome to Carp!</Text>
        <Text style={styles.subtitle}>What's your email and where you at?</Text>
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
