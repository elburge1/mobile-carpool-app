import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Picker,
} from 'react-native';

const Item = Picker.Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: '#05A5D1',
  },
  header: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontSize: 20,
    marginTop: 20,
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#41f444',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  input: {
    height: 50,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
})

class Profile extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      name: '',
      coffee: '',

    }
  }

  onChangeName(text) {
    this.state.name = text;
    this.setState(this.state)
  }

  onChangeCoffee(text) {
    this.state.coffee = text;
    this.setState(this.state)
  }

  onSubmitPressed() {
    console.log(this.state)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <TextInput
          onChangeText={this.onChangeName.bind(this)}
          required={true}
          placeholder="What would you like people to call you?"
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

export default Profile;