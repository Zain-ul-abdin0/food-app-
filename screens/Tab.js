import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BusinessDetailScreen from '../TopTabNav/BusinessDetailScreen';
import Services from '../TopTabNav/Services';
import ContactScreen from '../TopTabNav/ContactScreen';


 

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={ {
        activeTintColor:'black',
        labelStyle: { fontSize: 12,fontWeight:'bold' },

        inactiveTintColor:'#D3D3D3',
        style:{
            backgroundColor:'white',
            borderTopWidth:1,
            borderTopColor:'#D3D3D3'
        },
        indicatorStyle: {
            height:5,borderRadius:10,
            backgroundColor: 'red',
        },
    }}

      
      >
        <Tab.Screen name="Información" component={BusinessDetailScreen} />
        <Tab.Screen name="Contacto" component={ContactScreen} />

        <Tab.Screen name="Servicios" component={Services} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
