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

let manda = 'bae';

for (let i = 0; i< 10; i++){
  console.log(manda + " " + i);
  let manda = i;
}

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
  driver: {
    // marginTop: 20,
  },
  picker: {
    // height: 150,
    margin: 10,
  },
})

class Profile extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      name: '',
      driver: '',
      car: {
        make: '',
        model: '',
        color: '',
      },
    }
  }

  onChangeName(text) {
    this.state.name = text;
    this.setState(this.state)
  }

  onChangeCarMake(text){
    this.state.car.make = text;
    this.setState(this.state);
  }

  onChangeCarModel(text){
    this.state.car.model = text;
    this.setState(this.state);
  }

  onChangeCarColor(text){
    this.state.car.color = text;
    this.setState(this.state);
  }

  onValueChange(value: string, key: string){
    this.state.driver = value;
    this.setState(this.state);
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
        <View>
          <Picker
            onValueChange={this.onValueChange.bind(this)}
            mode={Picker.MODE_DROPDOWN}
            style={styles.picker}
            selectedValue={this.state.driver}
            >
              <Item label="Rider" value="rider"/>
              <Item label="Driver" value="driver" />
              <Item label="Both" value="both" />
            </Picker>
        </View>
        <TextInput
          onChangeText={this.onChangeCarMake.bind(this)}
          editable={this.state.driver === 'driver' || this.state.driver === 'both'}
          placeholder="What make is your car?"
          style={styles.input}
          >
          </TextInput>
          <TextInput
            onChangeText={this.onChangeCarModel.bind(this)}
            editable={this.state.driver === 'driver' || this.state.driver === 'both'}
            placeholder="What model is the car?"
            style={styles.input}
            >
            </TextInput>
            <TextInput
              onChangeText={this.onChangeCarColor.bind(this)}
              editable={this.state.driver === 'driver' || this.state.driver === 'both'}
              placeholder="What color is the car?"
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
