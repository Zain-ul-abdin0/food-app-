import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import IconsHeader from '../components/IconsHeader';
import MyTabs from './Tab';

export class RestaurantDetail extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <IconsHeader />

        <MyTabs />
      </View>
    );
  }
}

export default RestaurantDetail;
