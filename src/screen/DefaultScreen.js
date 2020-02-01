import React, { Component } from 'react';
import { Dimensions, View, Text, Image, Button, DeviceEventEmitter, Alert } from 'react-native';
import { Global, DefaultScreen } from '../style/styles';
import { withNavigationFocus } from 'react-navigation-is-focused-hoc'

import Beacons  from 'react-native-beacons-manager';

const nearestBeacon = 0;

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // region information
      identifier: 'Estimotes',
      uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
    };
  }

  componentWillMount(){
    const { uuid, identifier} = this.state;
    const region = { identifier, uuid };

    Beacons.requestAlwaysAuthorization();
    Beacons.shouldDropEmptyRanges(true);

    Beacons
      .startMonitoringForRegion(region)
      .then(() => console.log('Beacons monitoring started succesfully'))
      .catch(error => console.log(`Beacons monitoring not started, error: ${error}`));

    Beacons
      .startRangingBeaconsInRegion(region) // or like  < v1.0.7: .startRangingBeaconsInRegion(identifier, uuid)
      .then(() => console.log('Beacons ranging started succesfully'))
      .catch(error => console.log(`Beacons ranging not started, error: ${error}`));

    Beacons.startUpdatingLocation();
  }

  componentDidMount() {
    //component state aware here - attach events

    // monitoring events
    DeviceEventEmitter.addListener(
      'regionDidEnter',
      // ({identifier, uuid, minor, major}) => {
      (data) => {
        // this.props.navigation.navigate('Artwork', { major: this.state.closestBeaconMajor})
      }
    );

    DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        if (nearestBeacon == data.beacons[0].major) {
          return;
        } else {
          nearestBeacon = data.beacons[0].major;
          this.props.navigation.navigate('Artwork', { major: nearestBeacon})
        }
        this.setState({ closestBeaconMajor: data.beacons[0].major});
      }
    );
  }

  componentWillUnMount() {

    const { uuid, identifier } = this.state;
    const region = { identifier, uuid }; // minor and major are null here

    // stop monitoring beacons:
    Beacons
    .stopMonitoringForRegion(region)
    .then(() => console.log('Beacons monitoring stopped succesfully'))
    .catch(error => console.log(`Beacons monitoring not stopped, error: ${error}`));
  }

  render() {
    return (
      <View style={Global.GlobalContainer}>
        <View style={DefaultScreen.container}>
          <Image
            style={DefaultScreen.img}
            source={require('../img/logo.png')}
          />
        </View>
      </View>
    );
  }
}

export default withNavigationFocus(Default, 'Default')
