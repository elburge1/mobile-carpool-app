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
})

class WorkPlace extends Component {
  constructor(props, context){
    super(props, context);

  }

  render () {
    return (
      <View style={styles.container}>
        <Text>This is the workplace page</Text>
        <Picker>
          <Item label="pick one"/>
          <Item label="morning person" value="talkative"/>
          <Item label="I'll talk after I have coffee" value="might talk"/>
          <Item label="I'm just here so I don't get fined" value="nope"/>
        </Picker>
      </View>
    )
  }
}

export default WorkPlace;
