import { AppRegistry } from 'react-native';
import Little_Sparta from './src';
AppRegistry.registerComponent('Little_Sparta', () => Little_Sparta);

// import React, { Component } from 'react';
// import { AppRegistry, ListView, DeviceEventEmitter, View, Text } from 'react-native';
// import Beacons  from 'react-native-beacons-manager';
//
// const TIME_FORMAT = 'MM/DD/YYYY HH:mm:ss';
//
// class Little_Sparta extends Component {
//  constructor(props) {
//    super(props);
//
//    this.state = {
//      // region information
//      identifier: 'Estimotes',
//      //  uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
//     //  uuid: '53CEDE83-7C5E-4E1F-8EC5-49B0F91439F2',
//     //  uuid: '9FA480E0-4967-4542-9390-D343DC5D04AE',
//     //  uuid: 'd0611e78-bbb4-4591-a5f8-487910ae4366',
//     // uuid: '8667556c-9a37-4c91-84ed-54ee27d90049',
//     uuid: '8492E75F-4FD6-469D-B132-043FE94921D8',
//
//      rangingDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows([])
//    };
//  }
//
//  componentWillMount(){
//    const { identifier, uuid } = this.state;
//    //
//    // ONLY non component state aware here in componentWillMount
//    //
//
//    // OPTIONAL: listen to authorization change
//    DeviceEventEmitter.addListener(
//      'authorizationStatusDidChange',
//      (info) => console.log('authorizationStatusDidChange: ', info)
//    );
//
//    // MANDATORY: Request for authorization while the app is open
//    //           -> this is the authorization set by default by react-native init in the info.plist file
//    // RANGING ONLY (this is not enough to make MONITORING working)
//    Beacons.requestWhenInUseAuthorization();
//    // Define a region which can be identifier + uuid,
//    // identifier + uuid + major or identifier + uuid + major + minor
//    // (minor and major properties are numbers)
//    const region = { identifier, uuid };
//    // Range for beacons inside the region
//    Beacons.startRangingBeaconsInRegion(region);
//  }
//
//  componentDidMount() {
//    //
//    // component state aware here - attach events
//    //
//
//    // Ranging: Listen for beacon changes
//    DeviceEventEmitter.addListener(
//      'beaconsDidRange',
//      (data) => {
//       //  console.log('beaconsDidRange data: ', data);
//        this.setState({ rangingDataSource: this.state.rangingDataSource.cloneWithRows(data.beacons) });
//      }
//    );
//  }
//
//  componentWillUnMount() {
//    const { identifier, uuid } = this.state;
//    const region = { identifier, uuid };
//    // stop ranging beacons:
//    Beacons.stopRangingBeaconsInRegion(region);
//    // remove beacons event we registered at componentDidMount
//    DeviceEventEmitter.removeListener('beaconsDidRange');
//  }
//
//  render() {
//    const { rangingDataSource } =  this.state;
//
//    return (
//      <View>
//        <Text>
//          ranging beacons in the area:
//        </Text>
//        <ListView
//          dataSource={ rangingDataSource }
//          enableEmptySections={ true }
//          renderRow={this.renderRangingRow}
//        />
//       </View>
//    );
//  }
//
//  renderRangingRow(rowData) {
//    return (
//      <View >
//        <Text >
//          UUID: {rowData.uuid ? rowData.uuid  : 'NA'}
//        </Text>
//        <Text >
//          Major: {rowData.major ? rowData.major : 'NA'}
//        </Text>
//        <Text >
//          Minor: {rowData.minor ? rowData.minor : 'NA'}
//        </Text>
//        <Text>
//          RSSI: {rowData.rssi ? rowData.rssi : 'NA'}
//        </Text>
//        <Text>
//          Proximity: {rowData.proximity ? rowData.proximity : 'NA'}
//        </Text>
//        <Text>
//          Distance: {rowData.accuracy ? rowData.accuracy.toFixed(2) : 'NA'}m
//        </Text>
//      </View>
//    );
//  }
// }
//
// AppRegistry.registerComponent('Little_Sparta', () => Little_Sparta);
