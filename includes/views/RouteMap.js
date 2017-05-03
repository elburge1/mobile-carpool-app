import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';

var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 47.6253;
const LONGITUDE = -122.3222;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const styles = StyleSheet.create({

})

class RouteMap extends Component {
  render(){
    return (
      <View>
        <MapView
          ref="map"
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
        </MapView>
      </View>
    )
  }
}

export default RouteMap;
