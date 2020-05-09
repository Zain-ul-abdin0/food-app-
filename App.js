import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RestaurantDetail from './screens/RestaurantDetail'
import DiscoveryScreen from './screens/DiscoveryScreen'
import CategoryScreen from './screens/CategoryScreen'
import LoginScreen from './screens/LoginScreen'


export class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>


<RestaurantDetail/>

      </View>
    )
  }
}

export default App
