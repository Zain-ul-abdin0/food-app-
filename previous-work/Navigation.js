// import React from 'react';
// import { Text, View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       </View>
    );
  }
}

class ListScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       </View>
    );
  }
}

class HistoryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       </View>
    );
  }
}

class MeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>zainj</Text>
       </View>
    );
  }
}

// const TabNavigator = createBottomTabNavigator({
//   Home:{screen:HomeScreen,navigationOptions:{
//     tabBarLabel:'Search',tabBarIcon: ({ tintColor }) => (
//       <Icon name="search" size={20} color={tintColor} />
//     )
//   }},

//   Lists:{screen:ListScreen,navigationOptions:{
//     tabBarLabel:'Lists',tabBarIcon: ({ tintColor }) => (
//       <Icon name="list" size={20} color={tintColor} />
//     )
//   }}
// ,
// History:{screen:HistoryScreen,navigationOptions:{
//     tabBarLabel:'History',tabBarIcon: ({ tintColor }) => (
//       <Icon name="history" size={20} color={tintColor} />
//     )
//   }}
// ,
//   Me:{screen:MeScreen,navigationOptions:{
//     tabBarLabel:'Me',tabBarIcon: ({ tintColor }) => (
//       <Icon name="user" size={20} color={tintColor} />
//     )
//   }}
  
  
//   ,});

  

// export default createAppContainer(TabNavigator);





import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BusinessDetailScreen from '../TopTabNav/BusinessDetailScreen';
import Services from '../TopTabNav/Services';
import ContactScreen from '../TopTabNav/ContactScreen';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {Image,View,Text} from 'react-native'
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import CategoryScreen from '../screens/CategoryScreen';
import Demo from './Demo';

export default function TabNavigator() {
  return (
    <NavigationContainer style={{flex:1}}>

    <Tab.Navigator
      initialRouteName="Lists"
      tabBarOptions={{
        activeTintColor: '#FF2D55',
        
       }}
    > 
    
    
      <Tab.Screen
        name="Feed"
        component={Demo}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, }) => (
            <Icon name="search" size={20} color={color} />          

          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ListScreen}
        options={{
          tabBarLabel: 'Lists',
          tabBarIcon: ({ color, size,tintColor }) => (
            <Icon name="list" size={20} color={color}  />          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size ,tintColor}) => (
            <Icon name="history" size={20} color={color} />          ),
        }}
      />

<Tab.Screen
        name="Me"
        component={MeScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({ color, }) => (
            <Icon name="user" size={20}  color={color} />          ),
        }}
      />




    </Tab.Navigator>
    </NavigationContainer>

  );
}