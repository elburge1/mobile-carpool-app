import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import SetPrefs from './includes/views/SetPreference';
import Profile from './includes/views/Profile';
import RouteMap from './includes/views/RouteMap';

class Initial extends Component {
  constructor(props){
    super(props);

  }
}

AppRegistry.registerComponent('carp2', () => RouteMap);
