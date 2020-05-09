import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Demo from '../previous-work/Demo';
import TabNavigator from '../previous-work/Navigation';

export class DiscoveryScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TabNavigator />
      </View>
    );
  }
}

export default DiscoveryScreen;
