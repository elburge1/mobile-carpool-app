import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import SetPrefs from './includes/views/setPreference';
import Profile from './includes/views/workPlace';

class Initial extends Component {
  constructor(props){
    super(props);

  }
}

AppRegistry.registerComponent('carp2', () => Profile);
